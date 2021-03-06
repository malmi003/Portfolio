import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-primary">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center">
                        <div>&copy; Amanda Malmin 2018</div>
                    </div>
                    <div className="col-sm-4" id="footer-icons">
                        <a href="https://github.com/malmi003/" className="fa fa-code-branch" target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/amanda-malmin-90ba32b3/" className="fa fa-link mr-2" target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">linkedin</span>
                        </a>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;