import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 10px auto;
  border-radius: 20px;

  div {
    padding: 10px;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 1.9rem;
  }
`;

export const Vitrine = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
