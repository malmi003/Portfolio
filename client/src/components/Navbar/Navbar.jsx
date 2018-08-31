import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        activeUrl: "",
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

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top">
                <Link className="navbar-brand" to="/">Amanda Malmin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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