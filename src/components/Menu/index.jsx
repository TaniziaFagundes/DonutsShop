import { Container, Content, Itens } from "./styles";
import { useHistory } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import Button from "../../components/Button";
import Donnut from "../../assets/donut.svg";
import { useSelector } from "react-redux";
const Menu = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const handleClick = (page) => {
    return history.push(`/${page}`);
  };
  return (
    <Container>
      <Content>
        <Itens>
          <img src={Donnut} alt="Donnut"></img>
          <h2>Alarcon Doces</h2>
        </Itens>

        <Itens>
          <Button onClick={() => handleClick("")}>HOME</Button>
          <BiCartAlt size={20} z-index={5} />
          <p>{cart.length}</p>
          <Button onClick={() => handleClick("Carrinho")}>CARRINHO</Button>
        </Itens>
      </Content>
    </Container>
  );
};

export default Menu;
