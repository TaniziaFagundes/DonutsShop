import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  background-color: var(--white);
  border-radius: 16px;
  margin: 10px;
  height: 30vh;

  h1 {
    background-color: black;
    position: relative;
    width: 210px;
    color: white;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 4rem;
    left: 0%;
    right: 0%;
    top: -10px;
    border-radius: 16px 16px 0px 0px;
  }

  h2 {
    margin: 1.5rem auto;
  }
`;
