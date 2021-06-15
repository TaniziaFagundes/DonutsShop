import { Container } from "./styles";
import Button from "../../components/Button";

const CardProduct = ({
  name,
  id,
  image,
  price,
  colorSchema,
  handleChange,
  children,
}) => {
  return (
    <Container>
      <img src={image} alt={image}></img>

      <div>
        <h6>{name}</h6>
        <span>R$ {price}</span>
        <Button colorSchema={colorSchema} onClick={() => handleChange(id)}>
          {children}
        </Button>
      </div>
    </Container>
  );
};

export default CardProduct;
