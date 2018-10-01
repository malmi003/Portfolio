import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Jumbotron extends Component {
    render() {
        return (
            <article className="container-fluid">
                <header className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                        Meet Amanda: A Climate Change Fighter for Hire
                </p>

                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p>
                                My mission is to help code powerful, impacting, and scalable solutions to move towards a more sustainable tomorrow. &nbsp;
                                Have an idea addressing climate change, environmental degradation, pollution, or one of its related tenets but need someone to help you code it? You've come to the right place!
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </header>
            </article>
        );
    };
};

export default Jumbotron;