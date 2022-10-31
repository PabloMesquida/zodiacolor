import styled from "styled-components";
import { animated } from "react-spring";

export const InputsContainer = styled.div`
  width: 100%;
`;

export const NameContainer = styled.div`
  width: 100%;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ImgSign = styled(animated.div)`
  width: 52px;
  height: 52px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-color: lightblue;
  cursor: pointer;
  touch-action: none;
  overflow: visible;
  border-radius: 50px;
  z-index: 1;
  margin: 0.4rem;

  @keyframes scale-up-center {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 194px;
`;

export const SignContainers = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 194px;
`;

export const InputName = styled.input`
  width: 100%;
  height: 68px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colorFour};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem 0 0;
  margin-bottom: 2rem;
`;

export const TargetDiv = styled.div`
  width: 68px;
  height: 68px;
  background-color: ${({ attached }) => (attached ? "white" : "#54BAB9")};
  border-radius: 50px;
`;

export const TargetDivRef = styled.div`
  z-index: 5;
  width: 68px;
  height: 68px;
  border-radius: 50px;
`;

export const TargetCont = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;

export const TargetDesign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;

export const TargetRef = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;
