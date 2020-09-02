import React, {Component, Fragment} from 'react';
import './Reviews.scss'
import SectionHead from "../SectionHead/SectionHead";
import {Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewItems from "./ReviewItems/ReviewItems";
class Reviews extends Component {



    render() {
       let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            easing:'linear'
        };
        return (
            <Fragment>
                <div className="review-section space-100">
                    <SectionHead headName="Client Says"/>
                    <Container>
                        <Row>
                            <Col md={{span:10, offset:1}} >
                                <div className="review__inner">
                                    <Slider {...settings}>
                                        <ReviewItems/>
                                        <ReviewItems/>
                                        <ReviewItems/>
                                        <ReviewItems/>
                                        <ReviewItems/>
                                        <ReviewItems/>
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Reviews;