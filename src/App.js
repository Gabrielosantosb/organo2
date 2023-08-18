import { useEffect, useState } from "react";
import "./App.css";
import { Forms } from "./components/form";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import {groups} from './common/groups'
import { StorageServices } from "./services/storage";
import { STORAGE } from "./common/constants";

function App() {
  const [employees, setEmployees] = useState([]);
  const { getStorage, setStorage } = StorageServices();

  useEffect(() => {
    
    const savedEmployees = getStorage({ value: STORAGE.employees });
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  const addEmployee = (newEmployee) => {
    newEmployee.id = employees.length + 1;
    const _employees = [...employees, newEmployee];
    setEmployees(_employees);
    setStorage({ value: _employees });
  };

  const removeEmployee = (employeeToRemove) => {
    const _employees = employees.filter(
      (employee) => employee.id !== employeeToRemove
    );
    setEmployees(_employees);
    setStorage({ value: _employees });
  };

  return (
    <>
      <Header />
      <Forms groups={groups} newEmployee={addEmployee} />
      <div className="footer-container">
        {groups.map((group) => (
          <Footer
            key={group.name}
            name={group.name}
            color={group.color}
            employees={employees.filter(
              (employee) => employee.area === group.name
            )}
            removeEmployee={removeEmployee}
          />
        ))}
      </div>
    </>
  );
}

export default App;











