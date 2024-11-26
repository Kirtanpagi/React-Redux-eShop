import { combineReducers } from "redux";
import { cardReducer, productReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectProductReducer,
    cart: cardReducer,
});

export default reducers;
