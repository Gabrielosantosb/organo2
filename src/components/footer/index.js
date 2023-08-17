import React, { useEffect } from "react";
import { EmployeesCotainer, GroupsContainer, TitleH3 } from "./styles";
import { Employee } from "../employee";

// import { Container } from './styles';


  export const Footer = ({ name, color, employees }) => {
    return (
      <GroupsContainer color={color}>
        <TitleH3>{name}</TitleH3>
        <EmployeesCotainer>
          {employees.map((employee) => (
            <Employee
              key={employee.name} 
              name={employee.name}
              charge={employee.charge}
              img={employee.img}
            />
          ))}
        </EmployeesCotainer>
      </GroupsContainer>
    );
  };
