import React from "react";
import { ListContainer, Select } from "./styles";
import { Label } from "../textField/styled";

export const List = ({ label, placeholder, value, onChange, groups }) => {
  return (
    <ListContainer>
      <Label>{label}</Label>

      <Select onChange={onChange} value={value} placeholder={placeholder} required >
        <option value="" />
        {groups.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </Select>
    </ListContainer>
  );
};
