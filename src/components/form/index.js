import React, { useState } from "react";
import { Form, FormContainer, SubmitButton, Title } from "./styles";
import { TextField } from "../textField";
import { List } from "../list";

// import { Container } from './styles';

export const Forms = () => {
  const [name, setName] = useState("");
  const [charge, setCharge] = useState("");
  const [img, setImg] = useState("");
  const [area, setArea] = useState("");




  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = {
      name,
      charge,
      img
    };
    addEmployee(employee);
    setName('');
    setCharge('');
    setImg('');
  };

  const addEmployee = (employee) => {
    console.log('Adicionando funcionário:', employee);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Preencha os Dados</Title>
        <TextField
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(newValue) => setName(newValue.target.value)}
        />

        <TextField
          label="Cargo"
          placeholder="Digite seu cargo"
          value={charge}
          onChange={(newValue) => setCharge(newValue.target.value)}
        />

        <TextField
          label="Imagem"
          placeholder="https://github.com/usuario.png"
          value={img}
          onChange={(newValue) => setImg(newValue.target.value)}
        />
        <List
          label="Área"
          placeholder="https://github.com/usuario.png"
          value={area}
          onChange={(newValue) => setArea(newValue.target.value)}
        />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </FormContainer>
  );
};
