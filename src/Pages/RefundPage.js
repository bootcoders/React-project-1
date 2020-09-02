import React, {Component,Fragment} from 'react';
import Header from "../Components/Header/Header";
import SmallHeader from "../Components/SmallHeader/SmallHeader";
import RefundPolicy from "../Components/RefundPolicy/RefundPolicy";
import Footer from "../Components/Footer/Footer";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0,)
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <SmallHeader pageName="Refund Policy"/>
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;