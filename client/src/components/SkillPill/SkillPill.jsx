import React from "react";
import "./SkillPill.css";

const SkillPill = props => {
    const skills = props.skills;
    const listItems = skills.map(skill => 
        <div className="badge badge-secondary text-left">
        <h4>{skill}</h4>
    </div>
    )
return (
    <section id={props.id} className={props.className}>
        <h2 className="text-center">{props.title}</h2>
        <div>{listItems}</div>
    </section>
)};

export default SkillPill;