import React, {Component, Fragment} from 'react';
import './Projects.scss'
import SectionHead from "../SectionHead/SectionHead";
import {Container, Row, Col, Button} from "react-bootstrap";
class Projects extends Component {
    render() {
        return (
            <Fragment>
                <div className="project-section space-100">
                    <SectionHead headName="Recent Project"/>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="project_card">
                                    <div className="project_card--cover">
                                        <img src="https://via.placeholder.com/260X200" alt=""/>
                                    </div>
                                    <div className="project_card--heading">
                                        <h3>Web Project</h3>
                                    </div>
                                    <div className="project_card--desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at corporis, dolorum enim exceptur</p>
                                    </div>
                                    <div className="project_card--btn">
                                        <Button variant="primary" size="sm">Read More</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="project_card">
                                    <div className="project_card--cover">
                                        <img src="https://via.placeholder.com/260X200" alt=""/>
                                    </div>
                                    <div className="project_card--heading">
                                        <h3>Web Project</h3>
                                    </div>
                                    <div className="project_card--desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at corporis, dolorum enim exceptur</p>
                                    </div>
                                    <div className="project_card--btn">
                                        <Button variant="primary" size="sm">Read More</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="project_card">
                                    <div className="project_card--cover">
                                        <img src="https://via.placeholder.com/260X200" alt=""/>
                                    </div>
                                    <div className="project_card--heading">
                                        <h3>Web Project</h3>
                                    </div>
                                    <div className="project_card--desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at corporis, dolorum enim exceptur</p>
                                    </div>
                                    <div className="project_card--btn">
                                        <Button variant="primary" size="sm">Read More</Button>
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

export default Projects;