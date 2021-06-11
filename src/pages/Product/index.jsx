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

//redux thunk
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCarrinhoThunk } from "../../store/modules/cart/thunk";

const Products = () => {
  const products = [
    {
      id: 9,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img1,
      price: 14.5,
      quant: 1,
    },
    {
      id: 1,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img2,
      price: 14.5,
      quant: 1,
    },
    {
      id: 2,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img3,
      price: 14.5,
      quant: 1,
    },
    {
      id: 3,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img4,
      price: 14.5,
      quant: 1,
    },
    {
      id: 4,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img5,
      price: 14.5,
      quant: 1,
    },
    {
      id: 5,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img6,
      price: 14.5,
      quant: 1,
    },
    {
      id: 6,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img7,
      price: 14.5,
      quant: 1,
    },
    {
      id: 7,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img8,
      price: 14.5,
      quant: 1,
    },
    {
      id: 8,
      name: "torta",
      description: "descrição da torta aqui por favor",
      image: img9,
      price: 14.5,
      quant: 1,
    },
  ];

  const [newProduct, setNewProduct] = useState("");
  const dispatch = useDispatch();

  const handleChange = (id) => {
    const product = products.find((element) => element.id === id);
    setNewProduct(product);
    dispatch(addCarrinhoThunk(newProduct));
  };

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
            {products.map((item, index) => (
              <CardProduct
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                colorSchema="adicionar"
                handleChange={handleChange}
              >
                Adicionar
              </CardProduct>
            ))}
          </Vitrine>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Products;
