import React from "react";
// import { Link } from "react-router-dom";
import "./ExperienceCard.css";

const ExperienceCard = props => {
    const descriptions = props.descriptions;
    const listItems = descriptions.map(description =>
        <li>{description}</li>
    )
    return (
        <section className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                <div>
                    <h6 className="card-subtitle mb-2 text-small-italic">{props.dates}</h6>
                    <h6 className="card-subtitle mb-2 text-small-italic">{props.location}</h6>
                </div>
                <ul className="card-text">
                    <li className="dish-list-item">{listItems}</li>
                </ul>
            </div>
        </section>
    )
};
export default ExperienceCard;