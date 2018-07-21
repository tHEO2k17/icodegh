import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container, Button
} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="white" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={require('../../assets/img/logo-l.jpg')} className="logoImg rounded-circle" alt=""/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="#home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#services">
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#partners">
                                    Partners
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="#contact">
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Button color="danger" className="btn-pill">Join us</Button>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}