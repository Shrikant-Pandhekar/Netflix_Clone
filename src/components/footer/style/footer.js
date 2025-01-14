import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: #757575;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Select = styled.select`
  width: 120px;
  height: 40px;
  background: transparent;
  color: #999;
  font-size: 16px;
  padding: 0 20px;
  padding-left: 30px;
  padding-right: 10px;
  margin-top: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  background-image: url(/images/icons/globe.png);
  filter: brightness(0) invert(1);
  background-repeat: no-repeat;
  background-size: 1em auto;
  background-position: 0.5em center;

  option {
    background: #262626;
    margin-left: 10px;
    padding: 30px;
    font-size: 16px;
  }
`;
