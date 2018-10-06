import React from "react";
import "./SkillPill.css";

const SkillPill = props => {
    const skills = props.skills;
    let i = 0;
    const listItems = skills.map(skill =>
        <li className="badge badge-secondary" key={i++}>
            {skill}
        </li>
    )
    return (
        <section id={props.id} className={props.className}>
            <h2 className="text-center">{props.title}</h2>
            <ul>
                {listItems}
            </ul>

        </section>
    )
};

export default SkillPill;