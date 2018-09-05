import React, { Component } from "react";
import "./TechnologySideBar.css";
// import { Link } from "react-router-dom";

function DisplayProgress(props) {
    let progressSpanChain = [];

    for (let i = 0; i < props.proficiencyRating; i++) {
        progressSpanChain.push(props.children(i));
    };
    console.log(progressSpanChain);
    return progressSpanChain;
};

class TechnologySideBar extends Component {
    render() {
        return (
            <div className="text-left">
                <DisplayProgress proficiencyRating={4}>
                    {index => <span className='progressOval' key={index}></span>}
                </DisplayProgress>
                <br />
                <DisplayProgress proficiencyRating={10}>
                    {index => <span className='progressOval' key={index}></span>}
                </DisplayProgress>
            </div>
        );
    };
};

export default TechnologySideBar;