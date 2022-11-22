import styled from 'styled-components';
export const Header = styled.header`
  z-index: 500;
  position: sticky;
  top: 0;
  left: 0;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: #4354b0;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 50px;
  border: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0;
  cursor: pointer;
`;
export const InputWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  height: 40px;
  width: 300px;
  border: none;
  padding: 0 5px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  outline: none;
  font-size: 20px;
`;
