import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaSearch, FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const products = [
    { id: 1, title: "UI/UX Design Book", price: 45.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-feature-1.png", rating: 5 },
    { id: 2, title: "Software Development", price: 60.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-2.png", rating: 4 },
    { id: 3, title: "Digital Marketing", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png", rating: 5 },
    { id: 4, title: "Self Managements", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-4.png", rating: 5 },
    { id: 5, title: "Application Development", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-5.png", rating: 5 },
    { id: 6, title: "UI/UX Graphic Design", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-6.png", rating: 5 },
];

const Shop = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    // --- ADD TO CART LOGIC ---
    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        const isDuplicate = existingCart.find(item => item.id === product.id);

        if (!isDuplicate) {
            const updatedCart = [...existingCart, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);

            
        } else {
            alert("This item is already in your cart!");
        }
        navigate('/cart');
    };

    return (
        <>
            <Breadcrumb title="Our Shop" pageName="Shop" />

            <Container className="py-5 position-relative">
                {/* Floating Alert */}
                {showAlert && (
                    <Alert variant="success" className="position-fixed top-0 start-50 translate-middle-x mt-3 z-3 shadow">
                        Item added to cart successfully!
                    </Alert>
                )}

                <Row>
                    {/* Sidebar Filters */}
                    <Col lg={3} className="mb-4">
                        <div className="shop-sidebar p-4 bg-white border rounded-4 shadow-sm">
                            <h5 className="fw-bold mb-4">Search</h5>
                            <div className="search-box position-relative mb-5">
                                <Form.Control type="text" placeholder="Search products..." className="rounded-pill pe-5" />
                                <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
                            </div>

                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-unstyled category-list">
                                <li className="mb-2 d-flex justify-content-between">UI/UX Design <span>(12)</span></li>
                                <li className="mb-2 d-flex justify-content-between">Software <span>(08)</span></li>
                                <li className="mb-2 d-flex justify-content-between">Marketing <span>(15)</span></li>
                            </ul>

                            {/* Quick Link to Cart */}
                            <Button
                                variant="teal"
                                className="w-100 mt-4 rounded-pill text-white fw-bold"
                                onClick={() => navigate('/cart')}
                            >
                                Go to Cart <FaShoppingCart className="ms-2" />
                            </Button>
                        </div>
                    </Col>

                    {/* Product Grid */}
                    <Col lg={9}>
                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                            <p className="text-muted mb-0">Showing 1–{products.length} of {products.length} results</p>
                            <Form.Select className="w-auto rounded-pill border-0 shadow-sm px-3 mt-2 mt-md-0">
                                <option>Default Sorting</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </Form.Select>
                        </div>

                        <Row className="g-4">
                            {products.map((product) => (
                                <Col md={6} lg={4} key={product.id}>
                                    <Card className="product-card border-0 shadow-sm h-100 text-center p-3">
                                        <div className="product-img-wrapper mb-3 p-4">
                                            <Card.Img src={product.img} className="img-fluid mx-auto d-block" style={{ maxWidth: '80px' }} />
                                            <div className="product-overlay">
                                                <Button
                                                    variant="light"
                                                    className="rounded-circle shadow-sm me-2"
                                                    onClick={() => addToCart(product)}
                                                >
                                                    <FaShoppingCart className="text-teal" />
                                                </Button>
                                                <Button
                                                    variant="light"
                                                    className="rounded-circle shadow-sm"
                                                    onClick={() => navigate(`/viewdetails/${product.id}`)}
                                                >
                                                    <FaEye className="text-teal" />
                                                </Button>
                                            </div>
                                        </div>
                                        <Card.Body className="p-0">
                                            <div className="text-warning small mb-1">
                                                {[...Array(product.rating)].map((_, i) => <FaStar key={i} />)}
                                            </div>
                                            <Card.Title className="fw-bold h6">{product.title}</Card.Title>
                                            <h5 className="text-teal fw-bold">${product.price.toFixed(2)}</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Shop;