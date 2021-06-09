import { Container, Content, Close } from "./styles";
import Button from "../Button";
import Donnut from "../../assets/donut.svg";
import fechar from "../../assets/botao-fechar.svg";
const PopUpCadastro = ({ solicitar, setSolicitar }) => {
  const handleClosed = () => {
    setSolicitar(false);
  };

  return solicitar ? (
    <Container>
      <Close>
        <button onClick={() => handleClosed()}>
          <img src={fechar} alt="button fechar"></img>
        </button>
      </Close>
      <Content>
        <div>
          <img src={Donnut} alt="DOnnut"></img>
          <h3>Estamos quase lá!</h3>
        </div>
        <div>
          <Button colorSchema="Enviar Pedido">Enviar Pedido</Button>
        </div>
      </Content>
    </Container>
  ) : (
    ""
  );
};

export default PopUpCadastro;
