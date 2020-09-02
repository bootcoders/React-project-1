import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";

class Portfolio extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="All Course"/>
                <Projects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfolio;