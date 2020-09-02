import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import Services from "../Components/Services/Services";
import Technology from "../Components/Technology/Technology";
import Summary from "../Components/Summary/Summary";
import Projects from "../Components/Projects/Projects";
import Course from "../Components/Course/Course";
import HowDo from "../Components/howDo/HowDo";
import Reviews from "../Components/Reviews/Reviews";
import Footer from "../Components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <HeroSection/>
                <Services/>
                <Technology/>
                <Summary/>
                <Projects/>
                <Course/>
                <HowDo/>
                <Reviews/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;