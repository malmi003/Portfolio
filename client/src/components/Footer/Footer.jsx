import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-primary">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 text-center">
                        <div>&copy; Amanda Malmin 2018</div>
                    </div>
                    <div className="col-4 text-right">
                        <a href="https://github.com/malmi003/" className="fa fa-github"><span className="sr-only">github</span></a>
                        <a href="https://www.linkedin.com/in/amanda-malmin-90ba32b3/" className="fa fa-linkedin mr-2"><span className="sr-only">linkedin</span></a>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;