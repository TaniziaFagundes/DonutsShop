import { Container, Content, Vitrine } from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <Vitrine></Vitrine>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
