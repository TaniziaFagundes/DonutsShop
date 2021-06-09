import { Container } from "./styles";
import Button from "../../components/Button";

const CardProduct = ({ name, key, image, price, colorSchema }) => {
  return (
    <Container key={key}>
      <img src={`../../assets/ImgProduct/${image}`} alt={image}></img>
      <h6>{name}</h6>
      <div>
        <span>R$ {price}</span>
        <Button colorSchema={colorSchema}>Adicionar</Button>
      </div>
    </Container>
  );
};

export default CardProduct;
