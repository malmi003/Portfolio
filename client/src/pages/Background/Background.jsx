import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import ExperienceCard from "../../components/ExperienceCard";
import SkillPill from "../../components/SkillPill";
import Timecard from "../../components/Timecard";
import TimecardHorizontal from "../../components/TimecardHorizontal";

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalExpanded: false,
        };
      }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    togglePersonalSection = () => {
        this.state.personalExpanded?this.setState({personalExpanded:false}):this.setState({personalExpanded:true});
    }
    render() {
        return (
            <article className="container-fluid" id="background-body">
                <section className="row pt-5">
                    <div className="col-lg-9">
                        <h2 className="text-center">Full Stack Web Developer and Utility Agent</h2>
                        <p className="font-weight-bold text-center">Smart, Maintainable Code, Creative Problem Solver, Triple Bottom Line Vision</p>
                        <div className="main-timeline">
                            <Timecard
                                year="current"
                                title="Zero Waste Events: Eureka Recycling"
                                description="Working with an amazing group of zero-waste enthusiasts, we've been able to engage the public, promote self-efficacy, and divert an average of 94% of waste from local events around the metro!"
                            />
                            <Timecard
                                year="current"
                                title="Website Consultant"
                                description="After volunteering with a husky rescue for a number of years, I partnered with their main trainer to bring her website up to snuff with her talents and vision via WordPress. Together we've been able to boost conversion rates significantly!"
                            />
                            <Timecard
                                year="2018"
                                title="Full-Stack Web Development: University of Minnesota Twin Cities"
                                description="Using a combination of individual and intensive teamwork, I absorbed the technologies needed to build thoughtful full stack web apps using the MVC framework and M.E.R.N stack and quickly put them to work"
                            />
                            <Timecard
                                year="2017-18"
                                title="Soccer Coach &amp; Mentor: Southwest Highschool"
                                description="I've been fortunate enough to work with SWHS the last couple years to progress their women's soccer program and grow not only fantastic players, but people!"
                            />
                            <Timecard
                                year="2016-17"
                                title="Operations and Administrative Manager: Ecosentials"
                                description="Working with this start-up was a new adventure everyday that pushed me to learn many new skills, decipher large amounts of data, and create action plans for growth and improvement across all sectors of the organization."
                            />
                            <Timecard
                                year="2015"
                                title="NRRI &amp; SOL Produce"
                                description="Interned with some great cross-functional teams conducting a feasibility analysis for utilizing the NRRI roofs as part of their larger stormwater
                                management strategies and got into some exciting start-up mischief with SOL Produce."
                            />
                            <Timecard
                                year="2015"
                                title="Graduation"
                                description="I was honored to receive many awards for my time at UMD including Summa Cum Laude, the Labovitz School of Business &amp; Economics Award for Academic Excellence in B.A., the Academic Excellence Award for Org. Management, and more!"
                            />
                            <Timecard
                                year="2014-16"
                                title="Office Manager: Doucette's Special Events Rental"
                                description="My time with Doucette's was filled with great challenges and laughs. While there, I worked on many projects outside of running the day-to-day office operations including creating an extensive training resource collection."
                            />
                            <Timecard
                                year="2014"
                                title="Victus Farms"
                                description="Served as a 'Saturday crew' operative &amp; intern where I got hands on experience running an aquaponics/hydroponics facility."
                            />
                            <Timecard
                                year="2013-14"
                                title="A quick stint in NZ &amp; AUS"
                                description="After spending 6 weeks backpacking around New Zealand, I completed an intense semester abroad in Australia soaking in the new perspective, gardens, and surrounding cultures."
                            />
                            <Timecard
                                year="2011-15"
                                title="Off to Duluth and UMD!"
                                description="I started school at the University of Minnesota Duluth where I studied Organizational Management, Environment &amp; Sustainability, Finance and Health Care Management. I was able to take part in/lead many great groups and initiatives while on campus."
                            />
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <SkillPill
                        skills={[
                            "SWAT Analysis",
                            "Forecasting",
                            "Diverse Team Management",
                            "Performance Under Pressure",
                            "R&D",
                            "Project Management",
                            "HR Management",
                            "Team Building",
                            "Dedication",
                            "Adaptability",
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
                
                <section class="row pt-5 justify-content-center">
                <button 
                    class="btn btn-darker" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#personal-timecards" 
                    aria-expanded="false" 
                    aria-controls="collapseExample"
                    onClick={this.togglePersonalSection}
                    >
                    {this.state.personalExpanded?<div><h3>Check them out below</h3><p>click to collapse</p></div>:<div><h3>Want to see some personal accomplishments?</h3><p>click to expand</p></div>}
    
                </button>
                <div class="collapse" id="personal-timecards">
                <div class="main-timeline2 p-md-5">              
                <TimecardHorizontal
                        time="2019"
                        title="Will run first full marathon and spend at least 20 nights in a tent!"
                        icon="fa-medkit"
                        imageSrc="../../images/personal/gimpLogo.jpg"
                        imageAlt="Grandma's Marathon Logo"
                    />
                    <TimecardHorizontal
                        time="2018"
                        title="Hiked over 100 miles solo on the SHT &amp; ran first 1/2 iron"
                        icon="fa-shoe-prints"
                        imageSrc="../../images/personal/gimpTrail.jpg"
                        imageAlt="SHT"
                    />
                    <TimecardHorizontal
                        time="2017"
                        title="Built a convertible oak crib for my sister's first kid"
                        icon="fa-screwdriver"
                        imageSrc="../../images/personal/gimpCrib1.jpg"
                        imageAlt="sideview of crib"
                    />
                    <TimecardHorizontal
                        time="2016"
                        title="Became a year-round cycle commuter &amp; adopted our first mutt"
                        icon="fa-bicycle"
                        imageSrc="../../images/personal/gimpDog.jpg"
                        imageAlt="dog laying on side"
                    />
                    <TimecardHorizontal
                        time="2015"
                        title="Married my best friend on a beautiful Duluth day"
                        icon="fa-people-carry"
                        imageSrc="../../images/personal/gimpRings.jpg"
                        imageAlt="two wedding rings"
                    />
                    <TimecardHorizontal
                        time="2014"
                        title="Traveled the unforgettable Australian country side"
                        icon="fa-map-marked-alt"
                        imageSrc="../../images/personal/gimpTent.jpg"
                        imageAlt="car with rooftop tent next to water"
                    />
                    <TimecardHorizontal
                        time="2013"
                        title="Threw a ring into Mount Doom and explored the cheeky kiwi culture"
                        icon="fa-kiwi-bird"
                        imageSrc="../../images/personal/gimpDoom.jpg"
                        imageAlt="sideview of Mt Doom"
                    />
                    <TimecardHorizontal
                        time="2012"
                        title="Embraced a herbivorous lifestyle &amp; ran my first half marathon"
                        icon="fa-leaf"
                        imageSrc="../../images/personal/gimpBurger1.jpg"
                        imageAlt="wild rice burger"
                    /> 
                    </div>
                    </div>
                </section>
                <h3 className="text-center py-3 my-5">
                    <a href="./images/Resume-AmandaMalmin.pdf" download>Downloadable Resume here</a>
                </h3>
            </article >
        );
    };
};

export default Background;