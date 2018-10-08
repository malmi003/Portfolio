import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Jumbotron from "../../components/Jumbotron";
import HomeSection from "../../components/HomeSection";
import Button from "../../components/Button";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div id="home-container">
                <Jumbotron />
                <HomeSection
                    sectionId="background-section"
                    btnClass="btn-light"
                    link="/background"
                    btnName="Check out my background"
                />
                <section id="portfolio-section" className="row text-center">
                    <div className="col-12">
                        <Link to="/portfolio">
                            <img id="rock-stacks" src='./images/chris-yang-435205-unsplash.jpg' alt='rock stacks in front of water' />
                            <div id="rock-stacks-overlay">
                                <h3 id="rock-stacks-text">See what I've been building</h3>
                            </div>
                        </Link>

                    </div>
                </section>
                <section id="contact-section" className="row text-center">
                    <div className="triangle-top-right"></div>
                    <div className="triangle-top-left"></div>
                    <div className="col-12">
                        <h3>Reach out!</h3>
                        <hr className="light my-4" />
                        <p className="mb-5">Ready to start our climate-fighting adventure?</p>
                        
                        <Button
                            btnClass="btn-primary"
                            link="/contact"
                            btnName={[<i className="fa fa-envelope" aria-hidden="true"></i>, " Then send me a message \n & let's get started"]}
                        />
                    </div>
                </section>
            </div>
        );
    };
};

export default Home;