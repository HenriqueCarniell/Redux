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

    if (CartActionTypes.removeProduct === action.type) {
        return {
            ...state,
            products: state.products.filter((product) => product.id !== action.payload)
        }
    }

    if(CartActionTypes.addQuantity === action.type) {
        return {
            ...state,
            products: state.products.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            ),
        }
    }

    if(CartActionTypes.removeQuantity === action.type) {
        return {
            ...state,
            products: state.products.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity > 0 ? product.quantity - 1 : 0}
                    : product
            ),
        }
    }
    
    return state
}

export default cartReducer