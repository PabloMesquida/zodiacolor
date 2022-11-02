import styled from "styled-components";
import { animated } from "react-spring";

export const InputsContainer = styled.div`
  width: 100%;
`;

export const NameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const TargetCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
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
  position: abosolute;
  width: 100%;
  height: 68px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colorFour};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem 0 0;
  margin-bottom: 1.2rem;

  &:focus {
    outline: none;
    color: #363636;
  }
`;

export const InputSubmit = styled.input`
  height: 62px;
  width: 62px;
  border-radius: 50px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colorSubmitOk};
  font-family: "Fredoka One", cursive;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  border: 5px solid white;
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

export const TargetsCont = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
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

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

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

export const Messages = styled.div`
  width: 200px;
  height: 62px;
  margin-right: 0rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colorError};
`;

export const Alert = styled.span`
  ${({ sec }) =>
    sec === "name" &&
    `position: absolute;
     top: 20px; 
  `}
  ${({ sec }) =>
    sec === "target" &&
    `position: absolute;
     left: 50px;
     top: 15px;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  font-family: "Fredoka One", cursive;
  font-size: 0.8rem;
  color: white;
  background-color: ${({ theme }) => theme.colorError};
  border-radius: 15px;
  border: 3px solid white;
  margin: 0.5rem 0.5rem 0.5rem 0.25rem;
`;
