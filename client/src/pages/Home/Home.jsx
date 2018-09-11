import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <Jumbotron />
                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="border-bottom border-secondary pageHeader">My Pitch</h2>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <img src="https://images.unsplash.com/photo-1421867246451-d043149caab1?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=af7c3ff506f57e7aa81e5788fc6105db&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                                alt="water through the woods" className="img-thumbnail" />
                        </div>
                        <div className="col-md-8 text-center">
                            <h3 className="text-center my-3">Want more detail on my background?</h3>
                            <Link role="button" className="btn btn-block btn-primary mb-3" to="/resume">Check out my resume</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    };
};

export default Home;