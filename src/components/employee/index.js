import React, { useEffect } from "react";
import {
  EmployeeContent,
  EmployeeImage,
  EmployeeWrapper,
  Footer,
  Header,
  TitleH4,
  TitleH5,
  Initials,
  EmptyEmployeeContent,
  RemoveButton,
} from "./styles";

// import { Container } from './styles';

export const Employee = ({ name, charge, img, color, removeEmployee, id  }) => {

  const removeCard = () =>{
    
    removeEmployee(id);
  }

  return (
    <EmployeeWrapper>
      <Header color={color}>
        {img ? (
          <EmployeeImage src={img} alt={name} />
        ) : (
          <EmptyEmployeeContent />
        )}
      </Header>
      <Footer>
        <TitleH4>{name}</TitleH4>
        <TitleH5>{charge}</TitleH5>{" "}
      <RemoveButton onClick={removeCard}>Excluir</RemoveButton>
      </Footer>

    </EmployeeWrapper>
  );
};
