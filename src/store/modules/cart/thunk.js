import { addCarrinho, removeCarrinho } from "./actions";

export const addCarrinhoThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateCarrinho = [...cart, product];

    dispatch(addCarrinho(updateCarrinho));
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
    dispatch(removeCarrinho(updateCarrinho));
  };
};
