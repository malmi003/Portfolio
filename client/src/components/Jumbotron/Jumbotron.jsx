import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                    Climate change fighter for hire.
                </p>
                <hr className="my-4" />
                <p>More words I have yet to write.</p>
                <Link className="btn btn-primary btn-lg" to="/resume" role="button">Learn more</Link>
            </div>
        );
    };
};

export default Jumbotron;