import React from "react";
// import { Link } from "react-router-dom";
import "./Timecard.css";

const Timecard = props => {
    return (
        <div className="timeline">
            <section className="timeline-content">
                <span className="year">{props.year}</span>
                <h3 className="title">{props.title}</h3>
                <p className="description">
                    {props.description}
                </p>
            </section>
        </div>
    )
};
export default Timecard;