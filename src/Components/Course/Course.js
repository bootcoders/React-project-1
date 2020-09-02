import React, {Component,Fragment} from 'react';
import './Course.scss'
import SectionHead from "../SectionHead/SectionHead";
import {Container, Row, Col} from "react-bootstrap";
import CourseCard from "./courseCard/courseCard";
class Course extends Component {
    render() {
        return (
            <Fragment>
                <div className="course-section mt-5">
                    <SectionHead headName="Our Course"/>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <CourseCard/>
                            </Col>
                            <Col md={4}>
                                <CourseCard/>
                            </Col>
                            <Col md={4}>
                                <CourseCard/>
                            </Col>
                            <Col md={4}>
                                <CourseCard/>
                            </Col>
                            <Col md={4}>
                                <CourseCard/>
                            </Col>
                            <Col md={4}>
                            <CourseCard/>
                        </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Course;