import React, {Component, Fragment} from 'react';
import './Footer.scss'
import {Container,Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Copyright from "./Copyright/Copyright";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footer-section">
                    <Row>
                        <Col md={3}>
                            <div className="footer_card">
                                <div className="footer_card--heading">
                                    <h3>Follow Me</h3>
                                </div>
                                <div className="social_profile">
                                    <a href="#"> <FontAwesomeIcon icon={faFacebook}/> Facebook </a>
                                    <a href="#"> <FontAwesomeIcon icon={faYoutube}/> Youtube </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer_card">
                                <div className="footer_card--heading">
                                    <h3>Address</h3>
                                </div>
                                <div className="address">
                                    <address>
                                        #79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi
                                    </address>
                                </div>
                                <div className="person_contact">
                                    <a href="#"><FontAwesomeIcon icon={faEnvelope}/> mdharunbd88@gmail.com </a>
                                    <a href="#"><FontAwesomeIcon icon={faPhone}/> 01737485288 </a>

                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer_card">
                                <div className="footer_card--heading">
                                    <h3>Information</h3>

                                </div>
                                <div className="footer_links">
                                    <Link to="#">About Me </Link>
                                    <Link to="#">My Resume </Link>
                                    <Link to="#">Contact me </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer_card">
                                <div className="footer_card--heading">
                                    <h3>Legal</h3>

                                </div>
                                <div className="footer_links">
                                    <Link to="/refund">Refund Policy </Link>
                                    <Link to="/terms">Terms And Condition </Link>
                                    <Link to="/privacy">Privacy Policy </Link>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Copyright/>
            </Fragment>
        );
    }
}

export default Footer;