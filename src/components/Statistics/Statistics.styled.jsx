import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style: none;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 90%;
  margin: 0;
  padding: 0;
  align-self: center;
`;

export const Item = styled.li`
  text-transform: capitalize;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding-bottom: 35px;
  border-bottom: 1px solid rgb(181, 181, 181);
  width: 100%;
  font-size: 30px;
  font-family: Helvetica Neue;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-align: center;
  border-bottom: 1px solid rgb(181, 181, 181);
  margin: 0;
  padding: 0 0 10px 0;
`;
export const Span = styled.span`
  color: black;
  border: 2px solid black;
  border-radius: 8px;
  padding: 1px 10px;
  margin-left: 8px;
`;