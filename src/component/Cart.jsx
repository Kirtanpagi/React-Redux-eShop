import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { removeFromCart } from "../redux/action/productAction";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const backPage = () => {

        navigate(-1)

    }



    return (
        <>
            <Header />
                <Button variant="danger" onClick={backPage} className="px-4 mt-4 mx-3">Back</Button>
            <Container className="mt-4">
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    cart.map((product) => {
                        const { id, image, title, price } = product;

                        return (
                            <>


                                <Container className="">
                                    <Card key={id} className="mb-3 p-3" style={{ width: "42rem" }}>
                                        <Row className="g-0 align-items-center">
                                            <Col md={4} className="text-center">
                                                <Card.Img
                                                    variant="top"
                                                    src={image || "https://via.placeholder.com/150"}
                                                    alt="Product image"
                                                    className="img-fluid w-75 d-block mx-auto"
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <Card.Body>
                                                    <Card.Title>{title}</Card.Title>
                                                    <Card.Text>
                                                        <strong>Price:</strong> ${price.toFixed(2)}
                                                    </Card.Text>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => handleRemove(id)}
                                                    >
                                                        Remove from Cart
                                                    </Button>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Container>
                            </>
                        );
                    })
                )}


            </Container>
        </>
    );
};

export default Cart;
