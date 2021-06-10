import { Container, Content, Vitrine } from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Popup from "../../components/PopUp";
import CartTotal from "../../components/CardTotal";
import { useState } from "react";
const Cart = () => {
  const [solicitar, setSolicitar] = useState(false);

  const handleClickPopUp = () => {
    console.log("chamadaFuncion");
    setSolicitar(true);
  };
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <Vitrine></Vitrine>
          <CartTotal handleClickPopUp={handleClickPopUp} />
        </Content>
        <Footer />
      </Container>
      <Popup solicitar={solicitar} setSolicitar={setSolicitar} />
    </>
  );
};

export default Cart;
