import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 60px;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600) {
    font-size: 18px;
  }
`;
