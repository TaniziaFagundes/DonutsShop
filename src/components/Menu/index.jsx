import { Container, Content, Itens } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Donnut from "../../assets/donut.svg";

const Menu = () => {
  const history = useHistory();
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
          <Button onClick={() => handleClick("Carrinho")}>CARRINHO</Button>
        </Itens>
      </Content>
    </Container>
  );
};

export default Menu;
