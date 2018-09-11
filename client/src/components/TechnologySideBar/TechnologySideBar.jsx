import React, { Component } from "react";
import "./TechnologySideBar.css";
// import { Link } from "react-router-dom";

function DisplayProgress(props) {
    let progressSpanChain = [];
    for (let i = 0; i < props.proficiencyRating; i++) {
        progressSpanChain.push(props.children(i));
    };
    return progressSpanChain;
};
const Skill = props => (
    <div className="badge badge-secondary text-left">
        <h4>{props.skill}</h4>
        <DisplayProgress
            proficiencyRating={props.proficiencyRating}
        >
            {index => <span className='progressOval' key={index}></span>}
        </DisplayProgress>
    </div>
);

class TechnologySideBar extends Component {
    render() {
        return (
            <section id="TechnologySideBar">
                <h3>Technologies</h3>
                <Skill
                    skill="Bash/Terminal"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Git/Github"
                    proficiencyRating={4}
                />
                <Skill
                    skill="HTML"
                    proficiencyRating={5}
                />
                <Skill
                    skill="CSS"
                    proficiencyRating={5}
                />
                <Skill
                    skill="Bootstrap"
                    proficiencyRating={5}
                />
                <Skill
                    skill="Bulma/Materi."
                    proficiencyRating={4}
                />
                <Skill
                    skill="CSS Grid/Flex"
                    proficiencyRating={2}
                />
                <Skill
                    skill="UX/UI"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Javascript"
                    proficiencyRating={4}
                />
                <Skill
                    skill="jQuery"
                    proficiencyRating={5}
                />
                <Skill
                    skill="RESTful API's"
                    proficiencyRating={4}
                />
                <Skill
                    skill="JSON/AJAX"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Node.js"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Handlebars"
                    proficiencyRating={4}
                />
                <Skill
                    skill="ORM/Sequelize"
                    proficiencyRating={3}
                />
                <Skill
                    skill="SQL/MySQL"
                    proficiencyRating={3}
                />
                <Skill
                    skill="MongoDB"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Mongoose"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Express.js"
                    proficiencyRating={3}
                />
                <Skill
                    skill="React.js"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Nodemailer"
                    proficiencyRating={3}
                />
                <Skill
                    skill="Java"
                    proficiencyRating={1}
                />
                <Skill
                    skill="Firebase"
                    proficiencyRating={3}
                />
                <Skill
                    skill="Heroku"
                    proficiencyRating={4}
                />
                <Skill
                    skill="Passport"
                    proficiencyRating={3}
                />
                <Skill
                    skill="MVC"
                    proficiencyRating={4}
                />
                <Skill
                    skill="WordPress"
                    proficiencyRating={3}
                />
            </section>
        );
    };
};

export default TechnologySideBar;