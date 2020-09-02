import React, {Component, Fragment} from 'react';
import './Header.scss';
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
        this.state ={
            navbarBG : 'navCustom'
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navbarBG : 'navCustom_on_scroll'
            })
        }else if(window.screenY<100){
            this.setState({
                navbarBG:'navCustom'
            })
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navbarBG} expand="lg" fixed="top">
                    <Navbar.Brand href="#home">
                        <span className="logo-label"><Link to="/">Harun Rashid</Link></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/">Home</NavLink>
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/services">services</NavLink>
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/about">About</NavLink>
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/course">Course</NavLink>
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/portfolio">Portfolio</NavLink>
                            <NavLink exact activeStyle={{color:"#4C9DED"}} className="text-uppercase nav-link" to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Header;