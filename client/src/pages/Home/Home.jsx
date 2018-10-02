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
                    sectionId="resume-section"
                    btnClass="btn-light"
                    link="/resume"
                    btnName="Check out my background"
                />
                <section id="portfolio-section" className="row text-center">
                    <div className="col-12">
                        <Link to="/portfolio">
                            <img id="wood-pile" src='./images/radek-grzybowski-67609-unsplash.jpg' alt='wood pile' />
                        </Link>
                        <div id="wood-pile-overlay">
                            <h3 id="wood-pile-text">See what I've been building</h3>
                        </div>
                    </div>
                </section>
                <section id="contact-section" className="row text-center">
                    <div className="triangle-top-right"></div>
                    <div className="triangle-top-left"></div>
                    <div className="col-12">
                        <h3>Reach out!</h3>
                        <hr className="light my-4" />
                        <p>Ready to start our climate-fighting adventure?</p>
                        <Button
                            btnClass="btn-primary"
                            link="/contact"
                            btnName={"Then send me a message \n & let's get started"}
                        />
                    </div>
                </section>
            </div>
        );
    };
};

export default Home;