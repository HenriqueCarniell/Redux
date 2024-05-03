import CartActionTypes from "./action-types"

const InitialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = InitialState, action) => {

    if (action.type === CartActionTypes.addProduct) {
        // verificar se o produto ja ésta no carrinho
        const productIsAlredyInCart = state.products.some(
            (product) => product.id === action.payload.id
        );
        // se ele estiver, aumentar a sua quantidade em 1 
        if (productIsAlredyInCart) {
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };
        }
        // se ele não estiver, adiciona-lo
        return {
            ...state,
            products: [...state.products, { ...action.payload, quantity: 1 }]
        }
    };
    return state
}

export default cartReducer