import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaUser,
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaRegHeart, FaShoppingCart, FaArrowRight
} from 'react-icons/fa';
import { Cart } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <header className="header-wrapper w-100">
            {/* --- Top Bar: ##*/}
            <div className="top-bar py-2 text-white">
                <Container fluid className="px-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-4 info-items">
                            <span><FaPhoneAlt className="me-2" /> 256 214 203 215</span>
                            <span className="d-none d-md-inline"><FaMapMarkerAlt className="me-2" /> 258 Helano Street, New York</span>
                            <span className="d-none d-lg-inline"><FaRegClock className="me-2" /> Mon - Sat: 8:00 - 15:00</span>
                        </div>
                        <div className="d-flex align-items-center gap-4">
                            <div className="auth-links d-flex align-items-center">
                                <FaUser className="me-2" />
                                <Link to="/login" className="text-white text-decoration-none hover-teal">
                                    Login
                                </Link>
                                <span className="mx-2">/</span>
                                <Link to="/register" className="text-white text-decoration-none hover-teal">
                                    Register
                                </Link>
                            </div>
                            <div className="social-links d-flex gap-3 border-start ps-4 d-none d-sm-flex">
                                <small>Follow us:</small>
                                <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* --- Main Navbar: Container fluid with px-4 for edge-to-edge look --- */}
            <Navbar expand="lg" className="main-nav py-3 bg-white border-bottom">
                <Container fluid className="px-4">
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
                        <img
                            src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/logo-black.png"
                            alt="nature"
                            width="160"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fw-medium">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Pages" id="pages-nav">
                                <NavDropdown.Item as={Link} to="/instructor">Instructor</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Course</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-center gap-3">
                            <div className="icon-badge-wrapper"><FaRegHeart size={20} /><span className="badge-count">0</span></div>
                            <div className="icon-badge-wrapper">
                                <Link to="/cart" className="icon-badge-wrapper text-decoration-none text-reset"></Link>
                                <FaShoppingCart size={20}/><span className="badge-count">0</span></div>
                            <Button className="btn-start-trial rounded-pill px-4 py-2 border-0">
                                Start Free Trail <FaArrowRight className="ms-2" />
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;