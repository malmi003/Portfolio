import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ExperienceCard from "../../components/ExperienceCard"

class Resume extends Component {
    render() {
        return (
            <div>
                <p>
                    I am an experienced and passionate environmentalist looking for a career as a full stack web developer in a dynamic work environment directly addressing climate change and sustainability by coding solutions that impact the masses.
                </p>
                <p>
                    I studied Organizational Management and Environment & Sustainability at the U of M in Duluth where I was named the business school’s version of valedictorian. After spending several years in the small and startup world, I obtained a Full-Stack web development certification from the U of M Twin Cities focusing on the MERN stack (MongoDB, Express, React, Node) and various other web development technologies.
                            </p>
                <p>
                    I consider myself a self motivated individual with exceptional communication skills, strong analytical abilities, great attention to detail, extensive experience in leadership and team roles, energetic ability to learn quickly, and an unrivaled drive to provide the best level of service possible.
                            </p>
                <section>
                    <h2 className="text-center">Work Experience</h2>
                    <div className="card-columns">
                        <ExperienceCard
                            descriptions={[
                                "Assist in making events around the metro area zero-waste",
                                "Educate the public and vendors on the importance/procedures of such efforts",
                                "Provide any necessary support to volunteers/vendors during events"
                            ]}
                            title="Zero Waste Events Team Member"
                            subtitle="Eureka Recycling"
                            dates="Apr 2018 - current"
                            location="Minneapolis, MN"
                        />
                        <ExperienceCard
                            descriptions={[
                                "Lead a talented group of girls through a challenging and ultimately winning season",
                                "Emphasize developing individual skills in the context of team growth",
                                "Focus on applying lessons learned on the field to larger life concepts",
                                "Remember to weave fun into the fundamentals of play",
                            ]}
                            title="Women’s Soccer Coach"
                            subtitle="Southwest High School"
                            dates="2017 & 2018 fall season"
                            location="Minneapolis, MN"
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
                        />
                        <ExperienceCard
                            descriptions={[
                                "Green Infrastructure Intern: Natural Resource Research Institute",
                                "General Intern: Victus Farms, aqua/hydroponics facilities",
                                "Volunteer & website consultant: M.U.S.H.R.",
                            ]}
                            title="Other Roles"
                            subtitle=""
                            dates="Sept 2014 – Current"
                            location="Duluth, MN"
                        />
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
                        />
                    </div>
                </section>
                <section>
                    <h2 className="text-center">Education</h2>
                    <div className="card-deck">
                        <ExperienceCard
                            descriptions={[
                                "Built full web apps using the M.E.R.N stack",
                                "Other technologies include HTML, CSS, Javascript, various CSS frameworks, jQuery, APIs, Handlebars, DB management via Sequelize/MySQL, and many others"
                            ]}
                            title="Full Stack Web Development Certificate"
                            subtitle="The University of Minnesota Twin Cities"
                            dates="June 2018 - Aug 2018"
                            location="Minneapolis, MN"
                        />
                        <ExperienceCard
                            descriptions={[
                                "Major: Organizational Management with an emphasis in sustainability",
                                "Minors: Environment and Sustainability, Finance, and Health Care Management",
                                "Participated in study abroad program at Curtin University in Perth, Australia",
                            ]}
                            title="Bachelor of Business Administration"
                            subtitle="The University of Minnesota Duluth"
                            dates="Sept 2011 - May 2015"
                            location="Duluth, MN"
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
                        />
                    </div>
                </section>
                {/* <ExperienceCard
                    descriptions={[
                        "",
                        "",
                        "",
                    ]}
                    title=""
                    subtitle=""
                    dates=""
                    location=""
                /> */}

            </div>
        );
    };
};

export default Resume;