const localStore = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

const cartReducer = (state = localStore, action) => {
  switch (action.type) {
    case "@KenzieHub_addCarrinho":
      return action.updateCarrinho;
    case "@KenzieHub_removeCarrinho":
      return action.updateCarrinho;
    default:
      return state;
  }
};

export default cartReducer;
