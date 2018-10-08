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
                                year="2018"
                                title="Full-Stack Web Development: University of Minnesota Twin Cities"
                                description="Using a combination of individual and intensive teamwork, I absorbed the technologies needed to build thoughtful full stack web apps using the MVC framework and M.E.R.N stack"
                            />
                            <Timecard
                                year="2018-curr."
                                title="Zero Waste Events: Eureka Recycling"
                                description="Working with an amazing group of zero-waste enthusiasts, we've been able to engage the public, promote self-efficacy, and divert an average of 94% of waste from local events around the metro!"
                            />
                            <Timecard
                                year="2018-curr."
                                title="Website Consultant"
                                description="After volunteering with a husky rescue for a number of years, I partnered with their main trainer to bring their website up to snuff with their talents and vision via WordPress. Together we've been able to boost conversion rates significantly!"
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
                                description="Worked with some great cross-functional teams conducting a feasibility analysis for utilizing the NRRI roofs as part of larger stormwater
                                management strategies and got into some exciting start-up mischief with SOL Produce."
                            />
                            <Timecard
                                year="2015"
                                title="Graduation"
                                description="I was lucky enough to receive many honors for my time at UMD including Summa Cum Laude, the Labovitz School of Business &amp; Economics Award for Academic Excellence in B.A., the Academic Excellence Award for Org. Management, and more!"
                            />
                            <Timecard
                                year="2014-16"
                                title="Office Manager: Doucette's Special Events Rental"
                                description="My time with Doucette's was filled with great challenges and laughs. While there, I worked on many projects outside of running the day-day office operations including creating an extensive training resource collection."
                            />
                            <Timecard
                                year="2014"
                                title="Victus Farms"
                                description="Served as a 'Saturday crew' operative where I got hands on experience running an aquaponics/hydroponics facility."
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
                    <div className="col-lg-3">
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
                <section class="row pt-5 justify-content-center">
                <p>
 
  <button 
    class="btn btn-darker" 
    type="button" 
    data-toggle="collapse" 
    data-target="#personal-timecards" 
    aria-expanded="false" 
    aria-controls="collapseExample"
    onClick={this.togglePersonalSection}
    >
        {this.state.personalExpanded?<div><h3>See below</h3><p>click to collapse</p></div>:<div><h3>Want to see some personal accomplishments?</h3><p>click to expand</p></div>}
    
  </button>
</p>
<div class="collapse" id="personal-timecards">
<div class="main-timeline2 p-md-5">              
                    <TimecardHorizontal
                        time="2012"
                        title="Embraced a herbivorous diet &amp; ran my first half marathon"
                        icon="fa-leaf"
                        imageSrc="../../images/personal/gimpBurger.jpg"
                        imageAlt="wild rice burger"
                    />
                     <TimecardHorizontal
                        time="2013"
                        title="Threw a ring into Mount Doom"
                        icon="fa-kiwi-bird"
                        imageSrc="../../images/personal/gimpDoom.jpg"
                        imageAlt="sideview of Mt Doom"
                    />
                    <TimecardHorizontal
                        time="2014"
                        title="Slept on top of a car while traveling the unforgettable Australian country side"
                        icon="fa-map-marked-alt"
                        imageSrc="../../images/personal/gimpTent.jpg"
                        imageAlt="car with rooftop tent next to water"
                    />
                    <TimecardHorizontal
                        time="2015"
                        title="Married my best friend"
                        icon="fa-link"
                        imageSrc="../../images/personal/gimpRings.jpg"
                        imageAlt="two wedding rings"
                    />
                    <TimecardHorizontal
                        time="2016"
                        title="Became year-round cycle commuter &amp; adopted our first mutt"
                        icon="fa-paw"
                        imageSrc="../../images/personal/gimpDog.jpg"
                        imageAlt="dog laying on side"
                    />
                    <TimecardHorizontal
                        time="2017"
                        title="Built a convertible oak crib for my sister's first kid"
                        icon="fa-screwdriver"
                        imageSrc="../../images/personal/gimpCrib.jpg"
                        imageAlt="sideview of crib"
                    />
                    <TimecardHorizontal
                        time="2018"
                        title="Hiked over 100 miles solo on the SHT &amp; ran first 1/2 iron"
                        icon="fa-shoe-prints"
                        imageSrc="../../images/personal/gimpTrail.jpg"
                        imageAlt="SHT"
                    />
                    <TimecardHorizontal
                        time="2019"
                        title="Will run first full marathon"
                        icon="fa-medkit"
                        imageSrc="../../images/personal/gimpLogo.jpg"
                        imageAlt="Grandma's Marathon Logo"
                    />
                    </div>
</div>
                    
                </section>
            </article >
        );
    };
};

export default Background;