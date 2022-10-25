import styled from "styled-components";

export const ImgSign = styled.img`
  width: 50px;
  background: url("signs/${(props) => props.img}");
`;
