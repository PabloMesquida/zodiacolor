import styled from "styled-components";
import { animated } from "react-spring";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4.5rem;
`;

export const ColorTitle = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 70px;
  padding: 1rem;
`;

export const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  /* display: grid;
  justify-items: stretch;
  grid-template-columns: repeat(3, 1fr); */
  height: 300px;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

export const YourColor = styled.div`
  height: 78px;
  width: 78px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
`;

export const LatestColors = styled.div`
  z-index: 100;
  position: absolute;
  left: -2rem;
  margin-bottom: 150px;
  background-color: #fff;
  width: 364px;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.colorFive};
`;
