import React from "react";
import { EmployeeImage, Footer, Header, TitleH4, TitleH5 } from "./styles";

// import { Container } from './styles';

export const Employee = ({ name, charge, img }) => {
  return (
    <div>
      <Header>
        <EmployeeImage src={img} alt={name} />
      </Header>
      <Footer>
        <TitleH4>{name}</TitleH4>
        <TitleH5>{charge}</TitleH5>
      </Footer>
    </div>
  );
};
