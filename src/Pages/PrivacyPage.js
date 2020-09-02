import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../Components/Footer/Footer";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="Privacy Policy"/>
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;