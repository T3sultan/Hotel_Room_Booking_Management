import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

import './Header.css'

const Header = () => {

    return (

        <>
            <Navbar className="mineContainer" collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="container">
                    <Navbar.Brand href="#home" className="hospitalTittle">Specialized  Hospital</Navbar.Brand>
                    <Nav className="">
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="headerTitle" as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={HashLink} to="/mangeAllOrders">Mange All Orders</Nav.Link>
                            <Nav.Link as={HashLink} to="/addNewService">Add New Service</Nav.Link>


                            {/* {
                                user?.email ?
                                    <Button onClick={logout} >Logout</Button>
                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>


                            }
                            {
                                user?.email &&
                              
                                    <span style={{ color: "white" }}> {user?.displayName} </span>

                               
                            } */}




                        </Navbar.Collapse>

                    </Nav>
                </Container>
            </Navbar>

        </>




    );
};

export default Header;