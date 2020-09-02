import React, {Component,Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter/Counter";
import './Summary.scss'
class Summary extends Component {
    render() {
        return (
            <Fragment>
                <div className="summary-section space-100">
                   <Container>
                       <Row>
                           <Col md={4}>
                                <Counter countNumberStart={0} countNumberEnd={100} countLabel="Total Project"/>
                           </Col>
                           <Col md={4}>
                               <Counter countNumberStart={0} countNumberEnd={100} countLabel="Total Clients"/>
                           </Col>
                           <Col md={4}>
                               <Card className="Summary-card">
                                   <Card.Body>
                                       <Card.Title>How it Works</Card.Title>
                                       <Card.Text>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum Lorem ipsum</span>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum Lorem ipsum</span>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum ipsum</span>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum ipsum</span>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum ipsum </span>
                                           <span> <FontAwesomeIcon icon={faCheckCircle}/> Lorem ipsum  ipsum</span>
                                       </Card.Text>
                                   </Card.Body>
                               </Card>
                           </Col>
                       </Row>
                   </Container>

                </div>
            </Fragment>
        );
    }
}

export default Summary;