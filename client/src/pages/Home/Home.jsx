import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <div className="container-fluid">
                    <div className="row width-80">
                        <div className="col-md-12">
                            <h2 className="border-bottom border-secondary pageHeader">My Pitch</h2>
                        </div>
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1421867246451-d043149caab1?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=af7c3ff506f57e7aa81e5788fc6105db&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                                alt="water through the woods" className="img-thumbnail" />
                        </div>
                        <div className="col-md-8">
                            <p>
                                I am an experienced and passionate environmentalist looking for a career as a full stack web developer in a dynamic work environment directly addressing climate change and sustainability by coding solutions that impact the masses.
                </p>
                            <p>
                                I studied Organizational Management and Environment & Sustainability at the U of M in Duluth where I was named their business school’s version of valedictorian. After spending several years in the small and startup world, I obtained a Full-Stack web development certification from the U of M Twin Cities in order to make change through agile and accessible programming technologies in both the front and back ends including HTML, CSS, Node.js, JavaScript and Firebase to name a few.
                </p>
                            <p>
                                I consider myself a self motivated individual with exceptional communication skills, strong analytical abilities, great attention to detail, extensive experience in leadership and team roles, an energetic ability to learn quickly, and an unrivaled drive to provide the best level of service possible.
                </p>
                            <h3 className="text-center my-3">Want more detail?</h3>
                            <Link role="button" className="btn btn-block btn-primary mb-3" to="/resume">Check out my full resume</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;