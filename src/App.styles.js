import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  height: 640px;
  border: 0.5rem solid #fff;
  border-radius: 10px;
  background: linear-gradient(145deg, #f0f0f0, #efede8);
  box-shadow: 17px 17px 33px #c3c3c3, -17px -17px 33px #fdfdfd;
`;

export const Credits = styled.p`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
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
