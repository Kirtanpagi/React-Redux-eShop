import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectProducts, removeProducts, addToCart } from "../redux/action/productAction";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";

const ProductDetail = () => {
    const product = useSelector((state) => state.selectedProduct.product);
    const { image, title, price, category, description } = product || {};
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectProducts(response.data));
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchSingleProduct();
        }

       
        return () => {
            dispatch(removeProducts());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, dispatch]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product)); 
        }
    };

    const backPage = () => {
        navigate(-1);
    };

    return (
        <>
            <Header />
            <Container className="mt-5">
                {Object.keys(product).length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <Card className="mb-3">
                            <Row className="g-0 align-items-center">
                                <Col md={4}>
                                    <Card.Img
                                        src={image || "https://via.placeholder.com/150"}
                                        alt="Product image"
                                        className="img-fluid image-style-cart p-2"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>
                                            <strong>Price:</strong> ${price}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Category:</strong> {category}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Description:</strong> {description}
                                        </Card.Text>
                                        <Button variant="success" onClick={handleAddToCart}>
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Button
                            variant="danger"
                            className="d-block ms-auto px-4"
                            onClick={backPage} 
                        >
                            Back
                        </Button>
                    </>
                )}
            </Container>
        </>
    );
};

export default ProductDetail;
