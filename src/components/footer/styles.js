import { styled } from "styled-components";

export const GroupsContainer = styled.section`
  text-align: center;
  padding: 32px;
  background-color: ${({ color }) => color || 'aqua'};
`;

export const TitleH3 = styled.h3`
  font-size: 32px;
  border-bottom: 4px solid;
  display: inline-block;
  padding-bottom: 8px;
`;
export const EmployeesCotainer = styled.div`
  background-color: ${({ color }) => color || 'aqua'}; 
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  flex-wrap: wrap;
`;
