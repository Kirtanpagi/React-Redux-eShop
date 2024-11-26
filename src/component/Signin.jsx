import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const SignPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const clickPassword = () => {
        setShowPassword(!showPassword);
    };

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(input));
        navigate('/')
    };

    return (

        <>

            <section>
                <Container fluid="md" className="my-5">
                    <Row className=" justify-content-center align-items-center">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card className="border-0" style={{maxWidth: "100%", width: "28rem" }}>
                                <Card.Body className="p-5">
                                    <h2 className="fw-bold text-center mb-4">Create an account</h2>
                                    <Form onSubmit={handleSubmit}>

                                        <Form.Group className="mb-3" controlId="formName">
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <i className="fa-solid fa-user"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    name="name"
                                                    value={input.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Username"
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <i className="fa-solid fa-envelope"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    name="email"
                                                    value={input.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="formPassword">
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <i className="fa-solid fa-lock"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    name="password"
                                                    value={input.password}
                                                    onChange={handleChange}
                                                    required
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    maxLength={8}
                                                />
                                                <InputGroup.Text
                                                    className="bg-transparent cursor-pointer"
                                                    onClick={clickPassword}
                                                >
                                                    <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button type="submit" variant="danger" className="btn-lg w-100 ">
                                                Sign In
                                            </Button>
                                        </div>


                                        <p className="text-center text-muted mt-3 mb-0">
                                            Already have an account?{' '}
                                            <NavLink to="/" className="fw-bold text-body">
                                                <u>Login here</u>
                                            </NavLink>
                                        </p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>

    )

}

export default SignPage;