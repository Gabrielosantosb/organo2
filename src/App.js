import { useEffect, useState } from "react";
import "./App.css";
import { Forms } from "./components/form";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Employee } from "./components/employee";

function App() {
  
  const [employees, setEmployees] = useState([]);
  
  
  const addEmployee = (newEmployee) => { 
    newEmployee.id = Date.now();
    setEmployees([...employees, newEmployee]);
  };

  const removeEmployee = (employeeToRemove) => {
    const _employees = employees.filter(
      (employee) => employee.id !== employeeToRemove
      );
      setEmployees(_employees)
    
    

  };

  const groups = [
    {
      name: "Garçom",
      corPrimaria: "#57C278",
      color: "#D9F7E9",
    },
    {
      name: "Cozinha",
      corPrimaria: "#82CFFA",
      color: "#E8F8FF",
    },
    {
      name: "Limpeza",
      corPrimaria: "#A6D157",
      color: "#F0F8E2",
    },
    {
      name: "Gerência",
      corPrimaria: "#E06B69",
      color: "#FDE7E8",
    },
    {
      name: "Recepção",
      corPrimaria: "#DB6EBF",
      color: "#FAE9F5",
    },
  ];


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
