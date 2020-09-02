import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import ContactUs from "../Components/ContactUs/ContactUs";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="Get My Service"/>
                <Services/>
                <ContactUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;