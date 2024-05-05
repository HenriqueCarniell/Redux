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

export const removeQuantityProduct = (payload) => ({
    type: CartActionTypes.removeQuantity,
    payload,
});