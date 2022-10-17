import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const SubLogo = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding-left: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colorThree};
  background-color: #fff;
`;
