import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Nav_bar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width="185"
                        height="70"
                        className="d-inline-block align-top me-2"
                    />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link className="nav-text" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="nav-text" as={Link} to="/addbook">Add Book</Nav.Link>
                    <Nav.Link className="nav-text" as={Link} to="/viewbook">View Books</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Nav_bar;