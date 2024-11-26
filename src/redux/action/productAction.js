import { ActionTypes } from "../constant/action-types";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectProducts = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCTS,
        payload: product,
    };
};


export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART, 
        payload: product,
    };
};


export const removeProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};


export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,  
        payload: productId,
    };
};
