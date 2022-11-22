import styled from 'styled-components';
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  button {
    padding: 5px 10px;
    width: 150px;
    height: 35px;
    background-color: #5793f4;
    color: #ffff;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    transition: transform 250ms;
    :hover {
      background-color: #4354b0;
    }
    outline: none;
  }
`;
