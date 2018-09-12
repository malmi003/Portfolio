import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ExperienceCard from "../../components/ExperienceCard";
import SkillPill from "../../components/SkillPill";

class Resume extends Component {
    render() {
        return (
            <article className="container-fluid" id="resume-body">
                <header className="text-center pt-2">
                    <img src="./images/profile.png" alt="profile" className="rounded-circle" />
                    <h1>Amanda Malmin</h1>
                    <h2>Climate Change Fighter for Hire</h2>
                    <p>Experienced and passionate environmentalist looking for a career as a Full Stack Web Developer in a dynamic work environment directly addressing climate change and sustainability through code.</p>
                </header>
                <div className="row">
                    <SkillPill
                        skills={[
                            "Bash/Terminal",
                            "Git/Github",
                            "HTML",
                            "CSS",
                            "Bootstrap",
                            "Bulma",
                            "Materialize",
                            "WordPress",
                            "CSS Grid/Flexbox",
                            "UI/UX",
                            "Javascript",
                            "jQuery",
                            "RESTful API's",
                            "JSON/AJAX",
                            "Node.js",
                            "Handlebars",
                            "Basic Algorithms",
                            "ORM",
                            "Sequelize",
                            "SQL/MySQL",
                            "MongoDB",
                            "Mongoose",
                            "Express.js",
                            "React.js",
                            "Nodemailer",
                            "Java",
                            "Firebase",
                            "Heroku",
                            "Passport",
                            "MVC",

                        ]}
                        id="tech-skills-section"
                        className="col-md-6 text-center mt-5"
                        title="Technical Skills"
                    />
                    <SkillPill
                        skills={[
                            "Project Management",
                            "SWAT Analysis",
                            "Adaptability",
                            "Performance Under Pressure",
                            "R&D",
                            "Team Building",
                            "Dedication",
                            "Analytics",
                            "Customer Service",
                            "Communication",
                            "Quick Learning",
                            "Systems Thinking",
                            "Leadership",
                            "Continuous Improvement",
                            "Creative Problem Solving",
                            "And More!",
                        ]}
                        id="other-skills-section"
                        className="col-md-6 text-center mt-5"
                        title="Additional Skills"
                    />
                </div>
                <section className="mt-5" id="jobs-section">
                    <h2 className="text-center">Work Experience</h2>
                    <div className="container-fluid">
                        <div className="row">
                            <ExperienceCard
                                descriptions={[
                                    "Managed the office operations and procedures directly under company executives",
                                    "Provided the best customer service possible while assisting with complex event planning processes ",
                                    "Fostered lasting relationships with returning clients",
                                    "Initiated and developed self-directed projects and systems for continuous improvement",
                                    "Assisted in the development of educational, training, and marketing materials",
                                    "Adapted and performed a diverse range of essential and novel functions on strict deadlines",
                                    "Helped in the development and revision of employee roles and long term strategic vision and planning",
                                ]}
                                title="Office Manager"
                                subtitle="Doucette’s Party and Tent Rental"
                                dates="Aug 2014 – Aug 2016"
                                location="Duluth, MN"
                                col="col-lg-4"
                            />
                            <ExperienceCard
                                descriptions={[
                                    "Worked directly with company executives to create overall methodology to managing the day to day operations of a dynamic startup company",
                                    "Developed/refined data to identify areas for improvement and creatively problem solve",
                                    "Presented findings in a digestible and action oriented format",
                                    "Fulfilled all purchase orders from placement to final delivery",
                                    "Managed inventory including imports, forecasting, assembly & warehouse logistics",
                                    "Designed pricing and promotional models for current and future sales",
                                ]}
                                title="Operations and Administrative Manager"
                                subtitle="Ecosentials"
                                dates="Sept 2016 - Nov 2017"
                                location="Minneapolis, MN"
                                col="col-lg-4"
                            />
                            <div className="col-lg-4">
                                <ExperienceCard
                                    descriptions={[
                                        "Assist in designing and executing zero-waste events around the metro",
                                        "Educate the public and vendors on the importance/procedures of such efforts",
                                        "Support volunteers/vendors to meet our collective goals during events"
                                    ]}
                                    title="Zero Waste Events Team Member"
                                    subtitle="Eureka Recycling"
                                    dates="Apr 2018 - current"
                                    location="Minneapolis, MN"
                                />
                                <ExperienceCard
                                    descriptions={[
                                        "Women’s Soccer Coach: Southwest Minneapolis High School",
                                        "Green Infrastructure Intern: Natural Resource Research Institute",
                                        "General Intern: Victus Farms, aqua/hydroponics facilities",
                                        "Volunteer & website consultant: M.U.S.H.R.",
                                    ]}
                                    title="Other Roles"
                                    subtitle=""
                                    dates="Sept 2014 – Current"
                                    location="MN"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="edu-section" className="mt-5">
                    <h2 className="text-center">Education</h2>
                    <div className="row">
                        <ExperienceCard
                            descriptions={[
                                "Using a combination of individual and intensive teamwork, built full stack web apps using the MVC framework and M.E.R.N stack",
                                "See Technical Skills for more technologies utilized during this course"
                            ]}
                            title="Full Stack Web Development Certificate"
                            subtitle="The University of Minnesota Twin Cities"
                            col="col-lg-4"
                        />
                        <ExperienceCard
                            descriptions={[
                                "Major: Organizational Management with an emphasis in sustainability",
                                "Minors: Environment and Sustainability, Finance, and Health Care Management",
                                "Participated in study abroad program at Curtin University in Perth, Australia",
                            ]}
                            title="Bachelor of Business Administration"
                            subtitle="The University of Minnesota Duluth"
                            col="col-lg-4"
                        />
                        <ExperienceCard
                            descriptions={[
                                "GPA: 4.0, Summa Cum Laude, Program Honors, Dean’s List all semesters",
                                "Recipient of the Labovitz School of Business and Economics Award for Academic Excellence in Business Administration",
                                "Recipient of Academic Excellence Award for Organizational Management",
                                "Nominee for Academic Achievement and Commitment to the Management Profession Award",
                                "CARE Committee nominee and presenter at the LSBE Student Showcase"
                            ]}
                            title="Academic Achievements"
                            col="col-lg-4"
                        />
                    </div>
                </section>
                <h3 className="text-center py-3 my-5">
                    <a href="./images/Resume-AmandaMalmin.pdf" download>Downloadable Resume here</a>
                </h3>
            </article>
        );
    };
};

export default Resume;