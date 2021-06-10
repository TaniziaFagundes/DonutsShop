import { Container } from "./styles";
import Button from "../Button";
const CardTotal = ({ handleClickPopUp }) => {
  return (
    <Container>
      <h1>Total</h1>
      <h2>Price</h2>
      <Button colorSchema={"solicitar"} onClick={() => handleClickPopUp()}>
        Solicitar
      </Button>
    </Container>
  );
};

export default CardTotal;
