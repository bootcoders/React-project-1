import React, {Component,Fragment} from 'react';
import './AboutDesc.scss'
import {Container, Row,Col} from "react-bootstrap";
class AboutDesc extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col md={12} className="space-100">
                            <div className="aboutDesc-card">
                                <h3>Who i AM</h3>
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                            </div>
                            <div className="aboutDesc-card">
                                <h3>My Mission</h3>
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                            </div>
                            <div className="aboutDesc-card">
                                <h3>My Vision</h3>
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDesc;