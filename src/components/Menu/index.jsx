import { Container, Content, Itens } from "./styles";
import Donnut from "../../assets/donut.svg";
const Menu = () => {
  return (
    <Container>
      <Content>
        <Itens>
          <img src={Donnut} alt="Donnut"></img>
          <h2>Alarcon Doces</h2>
        </Itens>

        <Itens>
          <p>Home</p>
          <p>Carrinho</p>
        </Itens>
      </Content>
    </Container>
  );
};

export default Menu;
