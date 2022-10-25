import styled from "styled-components";

export const ImgSign = styled.div`
  width: 62px;
  height: 62px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
