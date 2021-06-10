import { Container } from "./styles";

const Button = ({ children, colorSchema, ...rest }) => {
  return (
    <Container colorSchema={colorSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
