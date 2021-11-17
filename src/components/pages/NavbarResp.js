import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';

export class NavbarResp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img 
                                src="/images/logoetu.png" 
                                width="80"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Krilya logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#ajouter-annonce">Ajouter Annonce</Nav.Link>
                                <Nav.Link href="#mes-annonces" >Mes annonces</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#se-connecter" >Se connecter</Nav.Link>
                                <Nav.Link href="#s'inscrire" >S'inscrire</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarResp ;
