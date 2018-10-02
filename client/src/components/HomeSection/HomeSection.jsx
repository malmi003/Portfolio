import React from "react";
// import { Link } from "react-router-dom";
import Button from "../Button";

const HomeSection = props => (
    <section id={props.sectionId} className="row text-center justify-content-md-center">
        <div className="triangle-right"></div>
        <div className="triangle-left"></div>
        <div className="col-md-9">
            <h3>Unique experiences lead to whole system approach to problem solving</h3>
            <hr className="light my-4" />
            <p>I come from a diverse world of start-ups, family owned companies, dedication to craft and customer service, and an education that grows everyday. See more about the unique opportunities that fill in my system's thinking approach to tackling challenges.</p>

            <Button
                btnClass={props.btnClass}
                link={props.link}
                btnName={props.btnName}
            />
        </div>

    </section>
);

export default HomeSection;