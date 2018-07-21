import React, { Component } from 'react';
import {
    Container, Row, Col,
    Card, CardBody, CardFooter,
    Button, Form, FormGroup, Label, Input,
    InputGroup, InputGroupAddon, InputGroupText,
    ListGroup, ListGroupItem
} from 'reactstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import 'react-owl-carousel2/lib/styles.css';
export default class Home extends Component {
    render() {
        return (
            <div>
                <header id="banner">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="text-danger">Meet &nbsp;&#8226;&nbsp; Learn &nbsp;&#8226;&nbsp; Build</h2>
                                <h6 className="text-white">Join the community and acquire new skills.</h6>
                                <p className="small"><em>"Whatever your goal — we'll get you there"</em> </p>
                                <Button color="danger" outline>
                                    Learn more <SimpleLineIcon name="arrow-right" size="small" style={{ "display": "inline" }} />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </header>

                <section id="about">
                    <Container>
                        <Row>
                            <Col>
                                <h4><SimpleLineIcon name="bulb" size="large" style={{ "display": "inline" }} /> &nbsp;ABOUT US</h4>
                                <Card>
                                    <CardBody>
                                        <h6 className="text-danger">A little about ICODEGH</h6>
                                        <p>
                                            ICODEGH is an organization who is supporting technology and creatvie start-ups in western region by acting as an organization to build the ecosystem of technology entrepreneurs and startup business by promoting innovation and entrepreneurship in Ghana.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="services">
                    <Container>
                        <Row>
                            <Col>
                                <h4><SimpleLineIcon name="briefcase" size="large" style={{ "display": "inline" }} /> &nbsp;Services</h4>
                                <Row >
                                    <Col className="big-pad">
                                        <h6 className="text-danger">What we do</h6>
                                        <p>
                                            We are pacesetters in developing special events and experiences for and with different partners. <br />
                                            We take this role very seriously because well-developed events and experiences, give our partners a glimpse into endless possibilities that can be achieved.
                                </p>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Card>
                                                    <CardBody>
                                                        <h6 className="text-danger">Co-working <br />Offices</h6>
                                                        <p>
                                                            We offer co-working offices for startups.
                                                </p>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col>
                                                <Card>
                                                    <CardBody>
                                                        <h6 className="text-danger">Private <br /> Offices</h6>
                                                        <p>
                                                            We offer private offices for businesses
                                                </p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="pt-3">
                                            <Col>
                                                <Card>
                                                    <CardBody>
                                                        <h6 className="text-danger">Event <br /> Spaces</h6>
                                                        <p>
                                                            We offer event space for indoor and outdoor programs / training
                                                </p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card>
                                                    <CardBody>
                                                        <h6 className="text-danger">Corporate Meeting Rooms</h6>
                                                        <p>
                                                            We offer meeting rooms for corporate and group meetings
                                                </p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="partners">
                    <Container>
                        <Row>
                            <Col>
                                <h4><SimpleLineIcon name="support" size="large" style={{ "display": "inline" }} /> &nbsp;Partners and Startups</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <h6 className="text-danger">Our Partners</h6>
                                <img src={require('../../assets/img/Our_Partners/AHK.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/british_council.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/DietCare.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/hope_in_motion.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/ispace.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/jobplug_africa.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/konrad_Adenauer_stiftung.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/ministry_of_business_development.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/mtn.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/nuels_food_zone.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/radio_silver.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/sekondi_takoradi_chamber_of_commerce_and_Industry.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/social_entrepreneurs.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Our_Partners/TUKWAN.png')} className="partner_img" alt="" />
                            </Col>
                            <Col md={{ size: 8, offset: 1 }} >
                                <h6 className="text-danger">Start-ups We Have Engaged</h6>
                                <img src={require('../../assets/img/Business_Startups/Aeroster.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/ahadfarms.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Barcamp.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/CancerSupportSocialNetwork.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/easyPage.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/eazzysocial.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/ECOVON.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/ekowkrationsart.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/EmmafosVentures.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/EmmanuelRecreationGround.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Episodegh.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/firstclasscollege.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/GES.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/GTUC.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/iSolveAfrica.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/KingslinkComputers.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/LordSeyEngineering.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/mobilecare.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Obirigames.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Paragonfm.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Pilolo.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/QuickTechnologyServices.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/RoyalNaturopathicClinic.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/safetyconsult.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/SenamFoods.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/ShopVille.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/VickyTrendz.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/VMinc.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/WYNED.png')} className="partner_img" alt="" />
                                <img src={require('../../assets/img/Business_Startups/Yfm.png')} className="partner_img" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        );
    }
}
