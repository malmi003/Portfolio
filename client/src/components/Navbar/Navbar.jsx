import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// need to add "is-active class to hambuger to make it work"
class Navbar extends Component {
    state = {
        activeUrl: "",
        hamburgerActive: false,
    }
    identifyActivePage = () => {
        let parsedUrl = window.location.href.split("/").pop();
        this.setState({
            activeUrl: parsedUrl,
        });
    };
    componentDidMount = () => {
        this.identifyActivePage()
    };
    componentDidUpdate = () => {
        let parsedUrl = window.location.href.split("/").pop();
        if (parsedUrl !== this.state.activeUrl) {
            this.identifyActivePage()
        };
    };
    changeHamburgerStatus = () => {
        if (this.state.hamburgerActive) {
            this.setState({
                hamburgerActive: false,
            });
        } else {
            this.setState({
                hamburgerActive: true,
            });
        };
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top">
                <Link className="navbar-brand" to="/">Amanda Malmin <br /> <small>&nbsp; coding for climate</small>
                </Link>
                {/* hambuger btn */}
                <button
                    className={this.state.hamburgerActive? "hamburger hamburger--collapse navbar-toggler hamburger--spring is-active":"hamburger hamburger--collapse hamburger--spring navbar-toggler"}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={this.changeHamburgerStatus}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className={
                            this.state.activeUrl === ""
                                ? "nav-link active"
                                : "nav-link"
                        }>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={
                            this.state.activeUrl === "resume"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className={
                            this.state.activeUrl === "portfolio"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className={
                            this.state.activeUrl === "contact"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                            <Link className="nav-link" to="/contact">Contact
                        {/* <span className="sr-only">(current)</span> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Navbar;