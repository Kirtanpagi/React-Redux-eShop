import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const clickPassword = () => {
        setShowPassword(!showPassword);
    };

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (storedUser && input.email === storedUser.email && input.password === storedUser.password) {
            alert("Login successful!");
            navigate("/productlist");
        } else {
            alert("Incorrect email or password");
        }
    };

    return (
        <section className="login-section">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={8} lg={6} xl={5}>
                        <Card className="border-0 mx-auto" style={{ maxWidth: "100%", width: "28rem" }}>
                            <Card.Body className="p-4">
                                <h2 className="text-center mb-4 fw-bold">Welcome</h2>
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <i className="fas fa-envelope"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                name="email"
                                                value={input.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="Username or Email"
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
                                                required
                                                name="password"
                                                value={input.password}
                                                onChange={handleChange}
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

                                    <div className="d-flex justify-content-end mb-3">
                                        <NavLink to="/pass" className="text-decoration-none text-muted">
                                            Forgot Password?
                                        </NavLink>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <Button type="submit" variant="danger" className="btn-lg w-100">
                                            Login
                                        </Button>
                                    </div>

                                    <p className="text-center text-muted mt-3 mb-0">
                                        Do not have an account?{" "}
                                        <NavLink to="/signin" className="fw-bold text-body">
                                            <u>Sign up here</u>
                                        </NavLink>
                                    </p>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginPage;
