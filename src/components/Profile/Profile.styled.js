import styled from 'styled-components';

export const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: white;
  margin: 20px 0;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  margin-top: 10px;
  // border-radius: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  padding: 10px 0;
  font-size: 18px;
  background-color: chocolate;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
  text-decoration: underline;
`;
export const Location = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
`;