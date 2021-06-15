import { addCarrinho, removeCarrinho } from "./actions";
import { toast } from "react-toastify";
export const addCarrinhoThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } =
      getState() || JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

    const carrinho = cart.find((element) => element.id === product.id);
    console.log(carrinho);
    if (product !== "" && carrinho === undefined) {
      const updateCarrinho = [...cart, product];
      localStorage.setItem(
        "@KenzieShop:cart",
        JSON.stringify([...cart, product])
      );
      dispatch(addCarrinho(updateCarrinho));
    } else if (carrinho !== undefined) {
      toast.dark("Produto já adicionado ao carrinho!!", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };
};

export const removeCarrinhoThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateCarrinho = [
      ...cart.filter((item, index) => {
        return item.id !== product;
      }),
    ];

    localStorage.setItem(
      "@KenzieShop:cart",
      JSON.stringify([
        ...cart.filter((item, index) => {
          return item.id !== product;
        }),
      ])
    );
    dispatch(removeCarrinho(updateCarrinho));
  };
};
