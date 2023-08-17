import React, { useState } from "react";
import { Form, FormContainer, SubmitButton, Title } from "./styles";
import { TextField } from "../textField";
import { List } from "../list";

// import { Container } from './styles';

export const Forms = ({groups, newEmployee}) => {
  const [name, setName] = useState("teste");
  const [charge, setCharge] = useState("teste");
  const [img, setImg] = useState("https://github.com/gabrielosantosb.png");
  const [area, setArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    newEmployee({

      name,
      charge,
      img,
      area
      })
    
    // setName("");
    // setCharge("");
    // setImg("");
  };



  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Preencha os Dados</Title>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(newValue) => setName(newValue.target.value)}
        />

        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={charge}
          onChange={(newValue) => setCharge(newValue.target.value)}
        />

        <TextField
          required={false}
          label="Imagem"
          placeholder="https://github.com/usuario.png"
          value={img}
          onChange={(newValue) => setImg(newValue.target.value)}
        />
        <List
          groups={groups}
          label="Área"
          value={area}
          onChange={(newValue) => setArea(newValue.target.value)}
        />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </FormContainer>
  );
};
