import React, {Component,Fragment} from 'react';
import './Services.scss'
import {Container,Row,Col} from "react-bootstrap";
import SectionHead from "../SectionHead/SectionHead";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode , faMobileAlt, faBezierCurve} from "@fortawesome/free-solid-svg-icons";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="service-section space-100">
                    <SectionHead headName="My Services"/>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="services-card">
                                    <div className="services-card__icon">
                                        <FontAwesomeIcon icon={faLaptopCode} />
                                    </div>
                                    <div className="services-card__heading">
                                        <h3>Web Development</h3>
                                    </div>
                                    <div className="services-card__desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy to make </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="services-card">
                                    <div className="services-card__icon">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </div>
                                    <div className="services-card__heading">
                                        <h3>Mobile Development</h3>
                                    </div>
                                    <div className="services-card__desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy to make </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="services-card">
                                    <div className="services-card__icon">
                                        <FontAwesomeIcon icon={faBezierCurve} />
                                    </div>
                                    <div className="services-card__heading">
                                        <h3>Grapics Design</h3>
                                    </div>
                                    <div className="services-card__desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy to make </p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Services;