import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    InputGroup, 
    Input, 
    InputGroupAddon, 
    Button, 
    Card, CardImg, CardImgOverlay } from 'reactstrap';
import SimpleLineIcon from 'react-simple-line-icons';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="big-pad">
                    <Col md={7}>
                        <h1 className="font-weight-bold text-white">
                            <span className="text-danger">Everything <br /> is about <br /> to</span> Change
                        </h1>
                        <InputGroup className="shadow mt-5">
                            <Input className="bg-dark text-white border-0" />
                            <InputGroupAddon addonType="append">
                                <Button color="danger">
                                    <SimpleLineIcon name="paper-plane" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <div className="pt-3">
                            <p className="text-muted">Subscribe to our mailing list and get notified when we launch.</p>
                        </div>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow">
                            <CardImg width="80%" src={require('../../assets/img/tempImg.jpg')}/>
                            <CardImgOverlay></CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
