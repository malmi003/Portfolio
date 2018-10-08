import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Jumbotron extends Component {
    render() {
        return (
            <article className="container-fluid">
                <header className="jumbotron">
                    <hr className="my-4" />
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 text-right" id="rock-container">
                            <img src="./images/gimpTanRockStack.png" alt="rock stack logo" id="large-rock-stack" />
                        </div>
                        <div className="col-sm-8 col-md-6 align-middle" id="header-text">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">
                                Meet Amanda: A Climate Change Fighter for Hire
                            </p>
                            <p>
                                My mission is to help code powerful, impacting, and scalable solutions to move towards a more sustainable tomorrow. &nbsp;
                                Have a project addressing climate change, environmental degradation, pollution, or one of its related tenets and need someone to help you code it? You've come to the right place!
                            </p>
                        </div>

                    </div>
                </header>
            </article>
        );
    };
};

export default Jumbotron;