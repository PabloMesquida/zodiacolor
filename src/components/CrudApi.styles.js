import styled from "styled-components";
import { animated } from "react-spring";

export const SectionContainer = styled.section`
  height: 466px;
  padding: 0rem 2rem 2rem 2rem;
  overflow: hidden;
`;

export const InfoContainer = styled(animated.div)``;

export const Credits = styled.p`
  font-size: 0.8rem;
  color: #999;

  a {
    text-decoration: none;
    color: #999;
  }

  a:hover {
    text-decoration: none;
    color: #999;
  }
`;
