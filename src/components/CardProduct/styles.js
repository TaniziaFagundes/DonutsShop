import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  background-color: var(--white);
  border-radius: 16px;
  color: var(--blueBlack);
  margin: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 1.1rem;
  }

  button {
    margin-left: 10px;
  }

  img {
    position: relative;
    width: 15rem;
    height: 210px;
    left: 0%;
    right: 0%;
    top: -10px;
    border-radius: 16px 16px 0px 0px;
  }
`;
