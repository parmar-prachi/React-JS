import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} to="/">
                <img
                    src="/img/logo5.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Logo"
                />
            </NavbarBrand>

            <NavbarToggle />

            <NavbarCollapse>    
                <NavbarLink as={Link} to="/" active>
                    Home
                </NavbarLink>

                <NavbarLink as={Link} to="/addproduct">
                    AddProduct
                </NavbarLink>

            
                <NavbarLink as={Link} to="/view">
                    View 
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Navigation;