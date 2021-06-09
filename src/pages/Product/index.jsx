import { Container, Content, Vitrine } from "./styles";
import Menu from "../../components/Menu";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
const Products = () => {
  const product = [
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "012.jpeg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "012.jpeg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: "011.svg",
      price: 14.5,
      quant: 1,
    },
  ];
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <div>
            <h5>Vitrine de Doces</h5>
            <hr />
          </div>
          <Vitrine>
            {product.map((item, index) => (
              <CardProduct
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
                colorSchema="adicionar"
              />
            ))}
          </Vitrine>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Products;
