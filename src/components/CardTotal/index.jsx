import { Container } from "./styles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Button from "../Button";
const CardTotal = ({ handleClickPopUp }) => {
  const cart = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let soma = 0;
    cart.map((item, index) => (soma += item.price));
    setPrice(soma);
  }, [cart]);
  return (
    <Container>
      <h1>Total</h1>
      <h2>R$ {price}</h2>
      <Button colorSchema={"solicitar"} onClick={() => handleClickPopUp()}>
        Solicitar
      </Button>
    </Container>
  );
};

export default CardTotal;
