import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import Course from "../Components/Course/Course";
import Footer from "../Components/Footer/Footer";

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="All Course"/>
                <Course/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;