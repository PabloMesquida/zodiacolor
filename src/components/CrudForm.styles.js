import styled from "styled-components";

export const ImgSign = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colorFour};
`;
