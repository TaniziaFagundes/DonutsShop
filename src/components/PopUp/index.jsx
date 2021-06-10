import { Container, Content, Close, Input } from "./styles";
import Button from "../Button";
import Donnut from "../../assets/donut.svg";
import Closed from "../../assets/close.png";

const PopUpCadastro = ({ solicitar, setSolicitar }) => {
  const handleClosed = () => {
    setSolicitar(false);
  };

  return solicitar ? (
    <Container>
      <Close>
        <button onClick={() => handleClosed()}>
          <img src={Closed} alt="close"></img>
        </button>
      </Close>
      <Content>
        <div>
          <img src={Donnut} alt="DOnnut"></img>
          <h3>Estamos quase lá!</h3>
        </div>
        <Input>
          <label>Seu Nome</label>
          <input></input>
          <Button onClick={() => handleClosed()} colorSchema="Enviar Pedido">
            Enviar Pedido
          </Button>
        </Input>
      </Content>
    </Container>
  ) : (
    ""
  );
};

export default PopUpCadastro;
