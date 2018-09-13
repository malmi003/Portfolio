import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div id="home-container">
                <Jumbotron />
            </div>
        );
    };
};

export default Home;