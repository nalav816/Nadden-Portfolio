import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
    return (
        <Navbar expand = "sm" bg ="transparent" fixed = "top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex flex-row ms-auto">
                    <Nav.Link href='#' className="NavBar-Text">Home</Nav.Link>
                    <Nav.Link href='#' className="NavBar-Text">About</Nav.Link>
                    <Nav.Link href='#' className="NavBar-Text">Projects</Nav.Link>
                    <Nav.Link href='#' className="NavBar-Text">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    );
}

export default NavBar