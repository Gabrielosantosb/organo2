import React from 'react';
import { ListContainer, Select } from './styles';
import { Label } from '../textField/styled';

// import { Container } from './styles';

export const List = ({label,placeholder,value,onChange}) => {
  return(
    <ListContainer>
        <Label>
            {label}
        </Label>

        <Select onChange={onChange} value={value}></Select>


    </ListContainer>



  )
}

