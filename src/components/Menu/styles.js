import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 10px auto;
  border-radius: 20px;
  background-color: var(--pink);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Content = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  h2 {
    margin-left: 20px;
  }

  p {
    font-size: 1.3rem;
    margin-right: 50px;
    margin: 0 auto;
  }

  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 20px;
    }
  }
`;
