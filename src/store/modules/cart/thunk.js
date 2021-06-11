import { addCarrinho } from "./actions";

export const addCarrinhoThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateCarrinho = [...cart, product];

    dispatch(addCarrinho(updateCarrinho));
  };
};
