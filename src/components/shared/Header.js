import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import SimpleLineIcon from 'react-simple-line-icons';

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
            <Navbar color="transparent" dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={require('../../assets/img/logo.png')} className="logoImg" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.facebook.com/iCODEGh/" className="text-muted">
                                    <SimpleLineIcon name="social-facebook" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://twitter.com/icodeteam" className="text-muted">
                                    <SimpleLineIcon name="social-twitter" />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}