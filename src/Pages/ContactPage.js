import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/ContactUs/ContactUs";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="Contact Us"/>
                <ContactUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;