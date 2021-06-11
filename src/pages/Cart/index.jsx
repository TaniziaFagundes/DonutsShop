import { Container, Content, Vitrine } from "./styles";
import { useState } from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Popup from "../../components/PopUp";
import CartTotal from "../../components/CardTotal";
import CardProduct from "../../components/CardProduct";

import { useSelector } from "react-redux";

const Cart = () => {
  const [solicitar, setSolicitar] = useState(false);

  const cart = useSelector((state) => state.cart);

  const handleClickPopUp = () => {
    setSolicitar(true);
  };

  const handleChange = () => {
    //chamar funcão que remove
  };
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <Vitrine>
            {cart.map((item, index) => (
              <CardProduct
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                colorSchema="remover"
                handleChange={handleChange}
              >
                Remover
              </CardProduct>
            ))}
          </Vitrine>
          <CartTotal handleClickPopUp={handleClickPopUp} />
        </Content>
        <Footer />
      </Container>
      <Popup solicitar={solicitar} setSolicitar={setSolicitar} />
    </>
  );
};

export default Cart;
