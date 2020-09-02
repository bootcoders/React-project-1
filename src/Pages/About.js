import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import AboutDesc from "../Components/AboutDesc/AboutDesc";
import Footer from "../Components/Footer/Footer";

class About extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="About Us"/>
                <AboutDesc/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;