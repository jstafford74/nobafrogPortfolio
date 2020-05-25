import React, { Component }  from 'react';
import { Navbar, Nav, Image, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../login";
import SignUp from "../signup";

export default class Header extends Component {

    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <div className="nav-group">
                        <Navbar.Brand href="#home">
                            <Image src="logo.png" className="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" className="menu-item">Home</Nav.Link>
                                <Nav.Link href="#link" className="menu-item">View Menus</Nav.Link>
                                <Nav.Link href="/sign-up" className="menu-item">Create Account</Nav.Link>
                                <Nav.Link href="/sign-in" className="menu-item">Log in</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className="sub-title">
                    </div>
                </Navbar>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

