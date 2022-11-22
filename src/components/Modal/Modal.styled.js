import styled from 'styled-components';
export const BackDrop = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  transform: 250ms;
`;

export const Img = styled.img`
  width: 85vw;
  height: 95vh;
  object-fit: cover;
`;
