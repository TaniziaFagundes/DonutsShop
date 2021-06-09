import { Container, Content, Vitrine } from "./styles";
import Menu from "../../components/Menu";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import img1 from "../../assets/ImgProduct/011.jpeg";
import img2 from "../../assets/ImgProduct/012.jpeg";
import img3 from "../../assets/ImgProduct/013.jpeg";
import img4 from "../../assets/ImgProduct/014.jpeg";
import img5 from "../../assets/ImgProduct/015.jpeg";
import img6 from "../../assets/ImgProduct/016.jpeg";
import img7 from "../../assets/ImgProduct/017.jpeg";
import img8 from "../../assets/ImgProduct/018.jpeg";
import img9 from "../../assets/ImgProduct/019.jpeg";

const Products = () => {
  const product = [
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img1,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img2,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img3,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img4,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img5,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img6,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img7,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img8,
      price: 14.5,
      quant: 1,
    },
    {
      id: 0,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img9,
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
