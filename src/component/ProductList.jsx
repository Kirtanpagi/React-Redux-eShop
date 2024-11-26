// import React from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { setProducts } from "../redux/action/productAction";

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`)
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div>
            <Product />
        </div>
    );
};

export default ProductList;
