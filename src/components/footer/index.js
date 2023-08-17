import React, { useEffect } from "react";
import { EmployeesCotainer, GroupsContainer, TitleH3 } from "./styles";
import { Employee } from "../employee";

export const Footer = ({ name, color, employees, removeEmployee }) => {
  const hasEmployees = employees.length > 0;

  return hasEmployees ? (
    <GroupsContainer color={color}>
      <TitleH3>{name}</TitleH3>
      <EmployeesCotainer color={color}>
        {employees.map((employee) => (
          <Employee
            removeEmployee={removeEmployee}
            color={color}
            key={employee.name}
            id={employee.id}
            name={employee.name}
            charge={employee.charge}
            img={employee.img}
          />
        ))}
      </EmployeesCotainer>
    </GroupsContainer>
  ) : (
    <></>
  );
};
