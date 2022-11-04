import styled from "styled-components";
import { animated } from "react-spring";

export const ColorElement = styled(animated.div)`
  height: 100%;
  width: 100px;
  background-color: ${(props) => props.color};
`;
