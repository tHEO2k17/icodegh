import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark">
                    <Container>
                        <Row>
                            <Col className="pt-3">
                                <p className="text-white text-center">Copyright &copy;{new Date().getFullYear()} ICode GH</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }
}