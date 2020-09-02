import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import About from "../Pages/About";
import CoursePage from "../Pages/CoursePage";
import Portfolio from "../Pages/Portfolio";
import ContactPage from "../Pages/ContactPage";
import RefundPage from "../Pages/RefundPage";
import TermsPage from "../Pages/TermsPage";
import PrivacyPage from "../Pages/PrivacyPage";

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;