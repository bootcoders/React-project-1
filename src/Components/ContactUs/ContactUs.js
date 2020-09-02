import React, {Component,Fragment} from 'react';
import './ContactUs.scss'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
class ContactUs extends Component {
    render() {
        return (
            <Fragment>
                <div className="contact-section space-100">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="contact-form">
                                   <div className="contact-form__head">
                                       <h3>Contact Me</h3>
                                   </div>
                                    <div className="contact-form__box">
                                        <Form>
                                            <Form.Group controlId="formName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>

                                            <Form.Group controlId="formEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows="3" />
                                            </Form.Group>

                                            <Button variant="primary" size="sm" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="contact-address">
                                    <div className="contact-address__head">
                                        <h3>Address</h3>
                                    </div>
                                    <div className="contact-address__box">
                                        <address>
                                            #79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi
                                        </address>
                                        <a href="#"> mdharunbd88@gmail.com </a>
                                        <a href="#">01737485288 </a>
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

export default ContactUs;