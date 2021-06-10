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

  button {
    background-color: transparent;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
  }
  img {
    width: 3rem;
  }
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
    margin: 3rem;
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

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem;

  label {
    margin-bottom: 0.5rem;
    color: var(--blueBlack);
    font-size: 1.5rem;
  }
  input {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #4e232e93;
  }
`;
