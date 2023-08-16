import { useState } from "react";
import "./App.css";
import { Forms } from "./components/form";
import { Header } from "./components/header";

function App() {
  const [employee, setEmployee] = useState([]);
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

  return (
    <>
      <Header />
      <Forms groups={groups} />
    </>
  );
}

export default App;
