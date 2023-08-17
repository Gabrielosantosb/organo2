import React, { useEffect } from "react";
import { EmployeesCotainer, GroupsContainer, TitleH3 } from "./styles";
import { Employee } from "../employee";

// import { Container } from './styles';

export const Footer = ({ groups, employee }) => {
    return (
      <GroupsContainer>
        {groups.map((group, index) => (
            <EmployeesCotainer key={index} style={{ backgroundColor: group.color }}>
              <TitleH3 style={{ color: group.corPrimaria }}>{group.nome}</TitleH3>
              
            
          </EmployeesCotainer>
        ))}
      </GroupsContainer>
    );
  };