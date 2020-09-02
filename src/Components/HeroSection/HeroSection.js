import React, {Component, Fragment} from 'react';
import {Button} from "react-bootstrap";
import  axios from 'axios'
import './HeroSection.scss';
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";

class HeroSection extends Component {
        constructor() {
                super();

                this.state={
                        title:"",
                        subtitle:""
                }
        }
   componentDidMount() {
       RestClient.GetRequest(AppURL.heroData).then(result=>{
               this.setState({
                       title:   result[0]['hero_heading'],
                       subtitle:   result[0]['hero_sub_head'],
               })

       });
   }

    render() {
        return (
            <Fragment>
                <div className="hero-section">
                    <div className="black-overlay padding_top">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.subtitle}</p>
                        <Button variant="primary">More Info</Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HeroSection;