import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    InputGroup, 
    Input, 
    InputGroupAddon, 
    Button, 
    Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import SimpleLineIcon from 'react-simple-line-icons';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="big-pad">
                    <Col md={6} className="text-white">
                        <h1 className="font-weight-bold font-weight-bold">
                            <span className="text-danger">Everything is about <br /> to</span> Change
                        </h1>
                        <InputGroup className="shadow mt-5 ">
                            <Input className="bg-dark text-white border-0" />
                            <InputGroupAddon addonType="append">
                                <Button color="danger">
                                    <SimpleLineIcon name="paper-plane" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col md={6} className="p-5">
                        <Card className="border-0 shadow">
                            <CardImg width="100%" src={require('../../assets/img/tempImg.jpg')} alt="Card image cap" />
                            <CardImgOverlay></CardImgOverlay>
                        </Card>
                    </Col>
                </Row>

                <Row className="pt-5">
                    <Col md={4}>
                        <p className="text-muted">Subscribe to our mailing list and get notified when we launch.</p>
                    </Col>
                    <Col md={8} className="text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/iCODEGh/" className="text-muted"><SimpleLineIcon name="social-facebook" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/icodeteam" className="text-muted"><SimpleLineIcon name="social-twitter" /></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
