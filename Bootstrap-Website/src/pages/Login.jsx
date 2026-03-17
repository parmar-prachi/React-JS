import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
            <Breadcrumb title="Login" pageName="Login" />

        <section className="login-section py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <div className="login-card p-4 p-md-5 bg-white shadow-sm rounded-4">
                            <h2 className="fw-bold mb-4 login-header">Login to your account</h2>

                            <Form>
                                {/* Username Field */}
                                <Form.Group className="mb-4" controlId="formUsername">
                                    <Form.Label className="small fw-semibold">
                                        Username <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        className="py-2 px-3 border-light-subtle rounded-2 custom-input"
                                    />
                                </Form.Group>

                                {/* Password Field */}
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="small fw-semibold">
                                        Password <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup className="custom-input-group">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="py-2 px-3 border-light-subtle rounded-start-2 border-end-0"
                                        />
                                        <InputGroup.Text
                                            className="bg-white border-light-subtle border-start-0 rounded-end-2 text-muted"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                {/* Remember Me & Forgot Password */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember Me"
                                        id="rememberMe"
                                        className="small text-muted fw-medium"
                                    />
                                    <a href="#" className="text-decoration-none small fw-bold text-primary-custom">
                                        Forgot Password?
                                    </a>
                                </div>

                                {/* Login Button */}
                                <Button
                                    className="w-100 py-2 fw-bold btn-teal border-0 rounded-2"
                                    type="submit"
                                >
                                    Log in
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <br></br>
        <Footer />
      </>

    )
      
};

export default Login;