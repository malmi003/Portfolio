import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import ExperienceCard from "../../components/ExperienceCard";
import SkillPill from "../../components/SkillPill";
import Timecard from "../../components/Timecard";

class Resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <article className="container-fluid" id="resume-body">
            {/* <header class="jumbotron">
                <div className="row pt-2">
                    <div className="col-md-4 text-center">
                        <img src="./images/profile.jpg" alt="profile" className="rounded-circle my-3" id="profile-img" />
                    </div>
                    <div className="col-md-7">
                        <h1>Amanda Malmin</h1>
                        <h2>Climate Change Fighter for Hire</h2>
                        <p>Experienced and passionate environmentalist looking for a career as a Full Stack Web Developer in a dynamic work environment directly addressing climate change and sustainability through code. I come from a background of figuring out how small pieces move together to create big pictures. Although I have unparalleled focus, I’m a lifelong learner and am known for quickly adapting to whatever role is required to achieve collective, long-term, strategic goals.</p>

                    </div>
                    <div className="col-md-1"></div>
                </div>
            </header> */}
                
                {/* <section className="mt-5" id="jobs-section">
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
                        </section> */}

                <section className="row pt-5">
                    <div className="col-md-9">
                        <h2 className="text-center">Full Stack Web Developer and Utility Agent</h2>
                        <p className="font-weight-bold text-center">Smart, Maintainable Code, Creative Problem Solver, Triple Bottom Line Vision</p>
                        <div className="main-timeline">
                            <Timecard
                                year="2018"
                                title="Full-Stack Web Development: University of Minnesota Twin Cities"
                                description="Using a combination of individual and intensive teamwork, learned the technologies needed to build thoughtful full stack web apps using the MVC framework and M.E.R.N stack"
                            />
                            <Timecard
                                year="2018-curr."
                                title="Zero Waste Events: Eureka Recycling"
                                description="Working with an amazing group of zero-waste enthusiasts, we've been able to divert an average of 94% of waste from local events around the metro!"
                            />
                            <Timecard
                                year="2018-curr."
                                title="Website Consultant"
                                description="After volunteering with a husky rescue for a number of years, I was able to partner with them and a trainer to update their websites in their image. Together we've been able to boost conversion rates significantly!"
                            />
                            <Timecard
                                year="2017-18"
                                title="Soccer Coach &amp; Mentor: Southwest Highschool"
                                description="I've been lucky enough to work with SWHS the last couple years to progress their program and grow not only fantastic players but people as well."
                            />
                            <Timecard
                                year="2016-17"
                                title="Operations and Administrative Manager: Ecosentials"
                                description="Working with this start-up was a new adventure everyday that pushed me to learn many new skills, decipher large amounts of data, and create action plans for growth and improvement across all sectors of the organization."
                            />
                            <Timecard
                                year="2015"
                                title="NRRI &amp; SOL Produce"
                                description="Got to work with some great cross-functional teams conducting a feasibility analysis for utilizing thr NRRI roofs as part of larger stormwater
                                management strategies and more start-up mischief with SOL Produce."
                            />
                            <Timecard
                                year="2015"
                                title="Graduation"
                                description="Lucky enough to receive many program honors including Summa Cum Laude, the Labovitz School of Business &amp; Economics Award for Academic Excellence in B.A., the Academic Excellence Award for Org. Management, and more!"
                            />
                            <Timecard
                                year="2014-16"
                                title="Office Manager: Doucette's Special Events Rental"
                                description="My time with Doucette's was filled with great challenges and laughs. While there, I worked on many projects outside of running the day-day office operations including creating an extensive training resource collection."
                            />
                            <Timecard
                                year="2014"
                                title="Victus Farms"
                                description="Served as a 'Saturday crew' operative where I got hands on experience running an aquaponics/hydroponics facility"
                            />
                            <Timecard
                                year="2013"
                                title="A quick stint in NZ &amp; AUS"
                                description="After spending 6 weeks backpacking around NZ, I completed an intense semester abroad in AUS soaking in the sun, gardens, and surrounding cultures."
                            />
                            <Timecard
                                year="2011-15"
                                title="Off to Duluth and UMD!"
                                description="I started school at the University of Minnesota Duluth where I studied Organizational Management, Environment &amp; Sustainability, Finance and Health Care Management. I was able to take part in/lead many great groups and initiatives while on campus."
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                    <SkillPill
                        skills={[
                            "SWAT Analysis",
                            "Adaptability",
                            "Diverse Team Management",
                            "Performance Under Pressure",
                            "R&D",
                            "Project Management",
                            "HR Management",
                            "Team Building",
                            "Dedication",
                            "Analytics",
                            "Customer Service",
                            "Communication",
                            "Leadership",
                            "Multitasking",
                            "Quick Learning",
                            "Systems Thinking",
                            "Product Development",
                            "Inventory Management",
                            "Green Initiatives",
                            "Sustainable Design",
                            "Book Keeping",
                            "IT Help",
                            "Continuous Improvement",
                            "Creative Problem Solving",
                            "Workflow Design", 
                            "And More!",
                            "Technical skills outlined in Portfolio",
                           
                        ]}
                        id="other-skills-section"
                        className="text-center mt-5"
                        title="Some skills I picked up along the way"
                    />
                    </div>
                </section>
                <h3 className="text-center py-3 my-5">
                    <a href="./images/Resume-AmandaMalmin.pdf" download>Downloadable Resume here</a>
                </h3>
            </article >
        );
    };
};

export default Resume;