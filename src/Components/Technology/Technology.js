import React, {Component, Fragment} from 'react';
import './Technology.scss'
import SectionHead from "../SectionHead/SectionHead";
import {Container, Row, Col} from "react-bootstrap";
import {Bar, BarChart, XAxis, Tooltip, ResponsiveContainer} from "recharts";
class Technology extends Component {
    constructor(){
        super();

        this.state={
            techData : [
                {
                    technology: 'Java',
                    project: '100',
                },
                {
                    technology: 'HTML',
                    project: '100',
                },
                {
                    technology: 'PHP',
                    project: '100',
                },
                {
                    technology: 'CSS',
                    project: '100',
                },
                {
                    technology: 'HTML',
                    project: '100',
                }
                ,{
                    technology: 'HTML',
                    project: '100',
                }
                ,{
                    technology: 'HTML',
                    project: '100',
                },



            ],
        }
    }
    render() {
        return (
            <Fragment>
                <div className="technology-section">
                    <SectionHead headName="Technology Used" />
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="technology-chart">
                                    <ResponsiveContainer>
                                        <BarChart  data={this.state.techData}>
                                            <XAxis dataKey="technology" />
                                            <Tooltip />
                                            <Bar dataKey="project" fill="#4C9DED" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="technology-desc">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Technology;