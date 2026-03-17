import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const Register = () => {
    return (
        <>
            {/* The Breadcrumb using the styling from your header screenshot */}
            <Breadcrumb title="Register" pageName="Register" />

            <section className="register-section py-5 bg-light-subtle">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="register-card p-4 p-md-5 bg-white shadow-sm rounded-4 border-0">
                                <Form>
                                    <Row>
                                        {/* First Name */}
                                        <Col md={6} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>

                                        {/* Last Name */}
                                        <Col md={6} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>

                                        {/* User Name */}
                                        <Col md={6} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">User Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="User Name"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>

                                        {/* E-Mail */}
                                        <Col md={6} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">E-Mail</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="E-Mail"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>

                                        {/* Password */}
                                        <Col xs={12} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>

                                        {/* Password Confirmation */}
                                        <Col xs={12} className="mb-4">
                                            <Form.Label className="fw-bold text-dark mb-2">Password confirmation</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password Confirmation"
                                                className="py-3 px-4 border-light-subtle rounded-3 custom-input"
                                            />
                                        </Col>
                                    </Row>

                                    {/* Register Button - Matching the teal from your course cards */}
                                    <Button
                                        className="w-100 py-3 fw-bold btn-teal border-0 rounded-3 mt-3"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Register;