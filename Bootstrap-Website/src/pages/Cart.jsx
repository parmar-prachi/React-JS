import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);


    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart); 
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    };

    // Calculate Total Price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <Breadcrumb title="Your Cart" pageName="Cart" />
            <Container className="py-5">
                {cartItems.length > 0 ? (
                    <>
                        <Table responsive hover className="cart-table align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th>Product</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <Image src={item.img} width={50} rounded />
                                        </td>
                                        <td className="fw-bold">{item.title}</td>
                                        <td className="text-teal fw-bold">${item.price.toFixed(2)}</td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <FaTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-between align-items-center mt-5 p-4 bg-light rounded-4">
                            <h4 className="mb-0 fw-bold">Total: <span className="text-teal">${totalPrice.toFixed(2)}</span></h4>
                            <Button className="btn-browse-teal rounded-pill px-5 py-2">
                                Checkout Now
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-5">
                        <h3>Your cart is empty!</h3>
                        <Link to="/shop">
                            <Button variant="outline-teal" className="rounded-pill mt-3">
                                <FaArrowLeft className="me-2" /> Back to Shop
                            </Button>
                        </Link>
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default Cart;