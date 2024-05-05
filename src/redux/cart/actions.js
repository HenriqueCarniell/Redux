import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.addProduct,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.removeProduct,
    payload,
});

export const addQuantityProduct = (payload) => ({
    type: CartActionTypes.addQuantity,
    payload,
});