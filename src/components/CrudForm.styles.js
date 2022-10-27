import styled from "styled-components";
import { animated } from "react-spring";

export const ImgSign = styled(animated.div)`
  width: 62px;
  height: 62px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  touch-action: none;
  overflow: visible;
`;

export const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TargetDiv = styled.div`
  width: 68px;
  height: 68px;
  background-color: ${({ theme }) => theme.colorFour};
`;

export const TargetCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;
