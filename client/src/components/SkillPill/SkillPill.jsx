import React from "react";
import "./SkillPill.css";

const SkillPill = props => {
    const skills = props.skills;
    let i = 0;
    const listItems = skills.map(skill => 
        <div className="badge badge-secondary text-left" key={i++}>
        <h4>{skill}</h4>
    </div>
    )
return (
    <section id={props.id} className={props.className}>
        <h2 className="text-center">{props.title}</h2>
        {listItems}
    </section>
)};

export default SkillPill;