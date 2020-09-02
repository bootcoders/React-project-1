import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import Terms from "../Components/Terms/Terms";
import Footer from "../Components/Footer/Footer";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="Terms & Conditions"/>
                <Terms/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;