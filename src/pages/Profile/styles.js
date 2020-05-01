import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 30px 20px;
`;

export const Text = styled.span`
  color: #444;
  font-size: 18px;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  border: 0;
  color: #fff;
  background-color: #FF312E;
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
`;
