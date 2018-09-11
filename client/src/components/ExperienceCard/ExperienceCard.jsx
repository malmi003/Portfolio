import React from "react";
// import { Link } from "react-router-dom";
import "./ExperienceCard.css";

const ExperienceCard = props => {
    const descriptions = props.descriptions;
    const listItems = descriptions.map(description =>
        <li className="dish-list-item">{description}</li>
    )
    return (
        <section className="card bg-brown">
            <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">{props.subtitle}</h6>
                <div>
                    <h6 className="card-subtitle mb-2 text-small-italic text-center">{props.dates}</h6>
                    <h6 className="card-subtitle mb-2 text-small-italic text-center">{props.location}</h6>
                </div>
                <ul className="card-text">{listItems}</ul>
            </div>
        </section>
    )
};
export default ExperienceCard;