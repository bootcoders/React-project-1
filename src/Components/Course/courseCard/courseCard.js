import React, {Component} from 'react';
import './courseCard.scss';
import {Col, Row} from "react-bootstrap";
class CourseCard extends Component {
    render() {
        return (
            <div className="course_card">
                <Row noGutters={true}>
                    <Col md={6}>
                        <div className="course_card--cover">
                            <img src="https://via.placeholder.com/260X200" alt=""/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="course_card--info">
                            <div className="course_card--heading">
                                <h3>Web Development</h3>
                            </div>
                            <div className="course_card--desc">
                                <p>Lorem Ipsum is simply dummy text of the printing </p>
                            </div>
                            <div className="course_card--btn">
                                <a href="#"> Details </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CourseCard;