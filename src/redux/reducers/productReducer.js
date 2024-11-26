import { ActionTypes } from "../constant/action-types";

const initialProductState = {
    products: [],
};

const initialSelectedProductState = {
    product: {},
};

const initialCartState = {
    cart: [],
};

// Reducer for all products
export const productReducer = (state = initialProductState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

// Reducer for selected product
export const selectProductReducer = (state = initialSelectedProductState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCTS:
            return { ...state, product: payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return { ...state, product: {} };
        default:
            return state;
    }
};


export const cardReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case ActionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload),
            };

        default:
            return state;
    }
};
