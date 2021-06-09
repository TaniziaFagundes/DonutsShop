import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.colorSchema === "solicitar" ||
    props.colorSchema === "adicionar" ||
    props.colorSchema === "Enviar Pedido"
      ? "#2ECC71"
      : props.colorSchema === "remover"
      ? "#CB5377"
      : ""};
  color: var(--white);
  font-size: 18px;
  height: 35px;
  border-radius: 8px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  transition: 0.5s;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  :hover {
    border: 2px solid var(--blueBlack);
  }
`;
