import styled from 'styled-components';

export const Section = styled.section`
  background-color: bisque;
  padding: 20px 0;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 22px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;
export const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: beige;
  border: 1px solid azure;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
`;