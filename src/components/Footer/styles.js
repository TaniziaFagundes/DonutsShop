import styled from "styled-components";
import Background from "../../assets/Rectangle.svg";

export const Container = styled.div`
  position: absolute;
  bottom: auto;
  width: 100%;
`;

export const Backgrounds = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  background-position-y: top;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  div {
    margin: -20px 30px;
  }

  img {
    margin: 5px;
  }

  p {
    display: flex;
    align-items: center;
    margin: 15px auto;
  }

  span {
    color: var(--pink);
    font-size: 16px;
    margin-left: 5px;
  }
`;
