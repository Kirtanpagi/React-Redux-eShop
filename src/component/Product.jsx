import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [filterProduct, setFilterProduct] = useState(products);

    // Handle search query
    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        if (searchQuery === "") {
            setFilterProduct(products);  
        } else {
            const filtered = products.filter((product) =>
                product.category.toLowerCase().includes(searchQuery) ||
                product.title.toLowerCase().includes(searchQuery) 
            );
            setFilterProduct(filtered);
        }
    };

    useEffect(() => {
        setFilterProduct(products); 
    }, [products]);

    return (
        <>
            <Header onSearch={handleSearch} /> 
            <Container className="mt-5">
                <Row className="g-3">
                    {filterProduct.length > 0 ? (
                        filterProduct.map((product) => {
                            const { id, title, category, price, image } = product;
                            return (
                                <Col md={6} lg={3} xs={12} key={id}>
                                    <Link className="text-decoration-none" to={`/product/${id}`}>
                                        <Card className="h-100">
                                            <Card.Img
                                                variant="top"
                                                src={image}
                                                className="img-fluid img-style p-5"
                                                alt={title}
                                            />
                                            <Card.Body>
                                                <Card.Title className="fs-6">{title}</Card.Title>
                                                <Card.Text><span className="fw-bold">Mrp:</span> {price}</Card.Text>
                                                <Card.Text><span className="fw-bold">Category:</span> {category}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })
                    ) : (
                        <div>Please wait...</div> 
                    )}
                    
                </Row>
            </Container>
        </>
    );
};

export default Product;
