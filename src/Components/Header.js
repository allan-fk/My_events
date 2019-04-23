import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Navbar, Nav} from 'react-bootstrap';
import '../Stylesheet/components/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">My_events</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" navbar>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#home">Se déconnecter</Nav.Link>
                                    <Nav.Link href="#home"><MdAccountCircle /></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                </IconContext.Provider>
            </div>
        )
    }
};