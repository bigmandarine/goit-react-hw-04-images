import styled from 'styled-components';
export const Item = styled.li`
  display: block;
  margin: 0 10px;
  margin-bottom: 10px;
  flex: 20%;
  cursor: pointer;
  height: 250px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms;
    :hover {
      transform: scale(1.03);
    }
  }
`;
