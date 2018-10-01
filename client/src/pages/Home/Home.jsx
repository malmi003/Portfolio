import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
                    <Button 
                       btnClass="btn-primary"
                       link="/portfolio"
                       btnName="See my projects" 
                    />
                    </div>
                </section>
                <section id="contact-section" className="row text-center">
                    <div className="col-12">
                    <Button 
                       btnClass="btn-primary"
                       link="/contact"
                       btnName="Send me a message" 
                    />
                    </div>
                </section>
            </div>
        );
    };
};

export default Home;