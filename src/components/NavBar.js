import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
    return (
        <Navbar expand = {false} bg ="transparent" fixed = "top">
            <Container>
                <Nav className="d-flex flex-row ms-auto">
                    <Nav.Link href='#Home' className="NavBar-Text mx-2">Home</Nav.Link>
                    <Nav.Link href='#About' className="NavBar-Text mx-2">About</Nav.Link>
                    <Nav.Link href='#Project' className="NavBar-Text mx-2">Projects</Nav.Link>
                    <Nav.Link href='#Contact' className="NavBar-Text mx-2">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>  
    );
}

export default NavBar