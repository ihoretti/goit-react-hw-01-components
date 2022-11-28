import styled from 'styled-components';

export const FrList = styled.ul`
  padding: 5px 0;
  background-color: bisque;
`;
export const FrItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  margin: 5px 5px;
  border-radius: 10px;
  font-size: 20px;
  font-style: italic;
  background-color: beige;
`;
export const Status = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FrImage = styled.img`
  height: 100%;
  padding: 2px 0;
  background-color: white;
  border-radius: 10px;
  margin-right: 10px;
`;