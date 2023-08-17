import { useEffect, useState } from "react";
import "./App.css";
import { Forms } from "./components/form";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  

  const [employee, setEmployee] = useState([]);
  const addEmployee = (newEmployee) => {
    setEmployee([...employee, newEmployee]);
    console.log(employee)
  };
  const groups = [
    {
      nome: "Garçom",
      corPrimaria: "#57C278",
      color: "#D9F7E9",
    },
    {
      nome: "Cozinha",
      corPrimaria: "#82CFFA",
      color: "#E8F8FF",
    },
    {
      nome: "Limpeza",
      corPrimaria: "#A6D157",
      color: "#F0F8E2",
    },
    {
      nome: "Gerência",
      corPrimaria: "#E06B69",
      color: "#FDE7E8",
    },
    {
      nome: "Recepção",
      corPrimaria: "#DB6EBF",
      color: "#FAE9F5",
    },
  ];
  useEffect(()=>{
    console.log(employee)
  }, [employee])
  return (
    <>
      <Header />
      <Forms groups={groups} addEmployee = {employee =>addEmployee(employee)}/>
      <Footer groups={groups} employee ={employee} name ={groups.nome}/>
    </>
  );
}

export default App;
