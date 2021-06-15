import { Container, Content, Close, Input } from "./styles";
import Button from "../Button";
import Donnut from "../../assets/donut.svg";
import Closed from "../../assets/close.png";

import ReactWhatsapp from "react-whatsapp";
import { toast } from "react-toastify";
const PopUpCadastro = ({ solicitar, setSolicitar }) => {
  const handleClosed = () => {
    setSolicitar(false);
  };

  const handleSend = () => {
    <ReactWhatsapp number="" message="" />;
    setSolicitar(false);
    localStorage.clear();
    toast.success("Pedido Enviado!!", {
      autoClose: 2000,
      position: "top-center",
    });
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
          <Button onClick={() => handleSend()} colorSchema="Enviar Pedido">
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
