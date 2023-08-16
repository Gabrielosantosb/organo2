import React from 'react';
import { Input, Label, TextFieldContainer } from './styled';

// import { Container } from './styles';

export const  TextField = ({label,placeholder,value,onChange}) => {
  return (
    <TextFieldContainer>
        <Label>
            {label}
        </Label>
        <Input placeholder={placeholder} value={value} onChange={onChange}/>

    </TextFieldContainer>

  )
}

