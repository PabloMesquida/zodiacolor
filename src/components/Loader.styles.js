import styled from "styled-components";
import { animated } from "react-spring";

export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
`;

export const Star = styled(animated.div)``;

export const LoaderText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colorFour};
  margin-top: 8rem;
  font-size: 0.8rem;
`;
