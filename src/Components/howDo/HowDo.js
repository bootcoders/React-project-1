import React, {Component,Fragment} from 'react';
import './HowDo.scss'
import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import popVideo from '../../assets/video/React Full Website Part 27.mp4'

class HowDo extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>{
        this.setState ({
            show:false
        })
    }
    modalOpen=()=>{
        this.setState({
            show:true
        })
    }
    render() {
        return (
            <Fragment>
                <div className="how-do">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="how-do__inner">
                                    <div className="how-do__head">
                                        <h3>How I Do</h3>
                                    </div>
                                    <div className="how-do__desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                    <div className="how-do__video">
                                        <a href="#" onClick={this.modalOpen}> <FontAwesomeIcon icon={faPlayCircle} /> </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReactPlayer url={popVideo} controls width='100%' playIcon={true}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default HowDo;