import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';

const NavMain = () => {
    return (
        <Container>
            <Navbar className="nav-menu justify-content-around fixed-top"  bg="white" variant="#40d2bc">
                <Navbar.Brand href="#"><img className="img-nav" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/></Navbar.Brand>
                <Nav>
                    <Nav.Link className="nav-item" href="#">About us</Nav.Link>
                    <Nav.Link className="nav-item" href="#">Career</Nav.Link>
                    <Nav.Link className="nav-item" href="#">Departement</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}
export default NavMain