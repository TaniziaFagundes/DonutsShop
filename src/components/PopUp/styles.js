import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: #4e232e93;
  top: 0;
`;

export const Close = styled.div`
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  top: 50px;
  background-color: red;
`;

export const Content = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  z-index: 1;
  margin: 0 auto;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: var(--pink);
  border-radius: 16px;

  button {
    width: 220px;
    height: 50px;
    text-align: center;
    margin: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 20%;
    margin: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  h3 {
    font-size: 1.5rem;
  }
`;
