/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {

    const cart = useSelector((state) => state.cart.cart);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"> 
                        <span><i className="fa-solid fa-store fs-3" style={{ color: "#ff9f00" }}></i></span> 
                        e<span className='fw-bold'>Shop</span>
                    </Navbar.Brand>

                    <Form.Label htmlFor="inlineFormInputGroupSearch" visuallyHidden>
                        Search
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            id="inlineFormInputGroupSearch"
                            placeholder="Search by Category"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                        <InputGroup.Text className='bg-color'>
                            <span><i className="fa-solid fa-magnifying-glass fs-5" style={{ color: "#000000" }}></i></span>
                        </InputGroup.Text>
                    </InputGroup>

                    <Nav className="me-auto">
                        

                        {/* Cart Section */}
                        <Nav.Link as={Link} to="/cart" className="mx-2">
                            <Badge bg="danger" className='mx-1'>{cart.length}</Badge>
                            <span className='nav-itemLineOne fs-6 text-white'>
                                Your <span className='fw-bold fs-6 mx-4'>Cart</span>
                            </span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
