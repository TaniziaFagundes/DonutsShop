import { Container, Content, Vitrine } from "./styles";
import { useState } from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Popup from "../../components/PopUp";
import CartTotal from "../../components/CardTotal";
import CardProduct from "../../components/CardProduct";

import { useSelector, useDispatch } from "react-redux";
import { removeCarrinhoThunk } from "../../store/modules/cart/thunk";
import { useEffect } from "react";

const Cart = () => {
  const [solicitar, setSolicitar] = useState(false);
  const [remove, setRemove] = useState("");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClickPopUp = () => {
    setSolicitar(true);
  };

  const handleChange = (id) => {
    setRemove(id);
  };

  useEffect(() => {
    dispatch(removeCarrinhoThunk(remove));
  }, [remove]);

  return (
    <>
      <Menu />
      <Container>
        <div>
          <h5>Seu Carrinho</h5>
          <hr />
        </div>
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
