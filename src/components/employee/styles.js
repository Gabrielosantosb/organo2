import React from 'react';
import { styled } from 'styled-components';

export const EmployeeWrapper = styled.div`
  width: 200px;
`;

export const EmployeeImage = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const EmptyEmployeeContent = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const Header = styled.div`
  background-color: ${({ color }) => color || '#f0f0f0'};
  border-radius: 10px 10px 0px 0px;
  height: 200px; /* Adjust this height to match the height of the image or content */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;

export const TitleH4 = styled.h4`
  color: #6278f7;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TitleH5 = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
`;

export const RemoveButton = styled.button`
  font-size: 16px;
  background-color: #f76262;
  border-radius: 10px;
  padding: 20px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: #fff;
`;