import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jumbotron extends Component {
    render() {
        return (
            <article className="container-fluid">
                <div className="jumbotron">
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
                            <Link className="btn btn-primary btn-lg m-2 home-btns" to="/resume" role="button">Learn more about my background</Link>
                            <Link className="btn btn-primary btn-lg m-2 home-btns" to="/portfolio" role="button">And other projects I've done</Link>
                            <Link className="btn btn-primary btn-lg home-btns" to="/contact" role="button">Then send me a message on how I can help achieve your ideas</Link>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </article>
        );
    };
};

export default Jumbotron;