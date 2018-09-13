import React from "react";
import "./PortfolioCard.css";

export const PortfolioCard = props => (
    <div className="col-md-6">
        <div className="cards-container">
            <a href={props.externalProjectLink} title={props.projectTitle}>
                <div className="card text-center">
                    <img className="card-img-top image" src={props.imageSrc} alt={props.projectTitle} />
                    <div className="overlay">
                        <h3 className="card-title text">
                            {props.projectTitle}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </a>
            <div className="card-body">
                <a href={props.externalCodeLink} className="small btn btn-primary wiggle-btn" title={props.codeTitle}
                    alt={props.codeTitle}>Check out the code</a>
            </div>
        </div>
    </div>
);