import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";
import TechnologySideBar from "../../components/TechnologySideBar";


class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container-fluid portfolio-body">
                <div className="row mx-auto">
                    <div className="col-md-12">
                        <h2 id="portfolio-header" className="pageHeader border-bottom border-secondary">My Online Works</h2>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-lg-9">
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="https://artspose.herokuapp.com/"
                                projectTitle="Artsposé"
                                imageSrc="./images/Artpose.jpg"
                                externalCodeLink="https://github.com/HRFoxhill/project3"
                                codeTitle="Artpose Code"
                                description="Find and explore new mediums/local artists, this app allows artists to login and submit their art and create their own portfolios"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://malmi003.github.io/Space-Explorer-Javascript/"
                                projectTitle="Space Explorer Math Game"
                                imageSrc="./images/SpaceExplorer.jpg"
                                externalCodeLink="https://github.com/malmi003/Space-Explorer-Javascript"
                                codeTitle="Space Explorer Game Code"
                                description="Explore the galaxy through numbers"
                            />
                        </div>
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="https://petcupid.herokuapp.com/"
                                projectTitle="Pet Cupid"
                                imageSrc="./images/PetCupid.jpg"
                                externalCodeLink="https://github.com/kmvincent/Project2"
                                codeTitle="Pet Cupid Code"
                                description="This application uses the Pet Finder API to match perspective pet owners wih their ideal pet based on their survey results"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://session-a4950.firebaseapp.com/"
                                projectTitle="Session Study App"
                                imageSrc="./images/Session.jpg"
                                externalCodeLink="https://github.com/JonOpacich/CB-Project-1"
                                codeTitle="Session Code"
                                description="'Session: study together' was created to facilitate study group creation in the coding bootcamp"
                            />
                        </div>
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="http://trinitydogsmn.com/"
                                projectTitle="Trinity Dogs"
                                imageSrc="./images/TrinityDogs.jpg"
                                externalCodeLink="http://trinitydogsmn.com/"
                                codeTitle="Trinity Dogs"
                                description="A website updated for M.U.S.H.R. dog trainer, Jessica Kuehlman, inspiring clients and bringing her vision to life"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://malmi003.github.io/HP-Rideshare-Board/"
                                projectTitle="Hogwarts Trip Planner"
                                imageSrc="./images/TrainScheduler.jpg"
                                externalCodeLink="https://github.com/malmi003/HP-Rideshare-Board"
                                codeTitle="Hogwarts Trip Planner Code"
                                description="A rideshare app for those traveling to the magical world"
                            />
                        </div>
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="https://thawing-garden-86806.herokuapp.com/"
                                projectTitle="Friend Finder"
                                imageSrc="./images/FriendFinder.jpg"
                                externalCodeLink="https://github.com/malmi003/Friend-Finder"
                                codeTitle="Friend Finder Code"
                                description="Full-stack application that matches people and dogs based on their compatibility"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://malmi003.github.io/Ships-Clicky-Game/"
                                projectTitle="Ships Clicky Game"
                                imageSrc="./images/ClickyGame.jpg"
                                externalCodeLink="https://github.com/malmi003/Ships-Clicky-Game"
                                codeTitle="Ships Clicky Game Code"
                                description="This React app was built to test your memory with some of the big ships seen in the Great Lakes."
                            />
                        </div>
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="https://morning-springs-85911.herokuapp.com/"
                                projectTitle="Community Class Scraper"
                                imageSrc="./images/Scraper.jpg"
                                externalCodeLink="https://github.com/malmi003/Community-Class-Scraper"
                                codeTitle="Community Class Scraper Code"
                                description="This app scrapes the Minneapolis Public Schools Community Education website for the latest classes allowing you to save favorites and notes for reference later"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://obscure-shelf-18720.herokuapp.com/"
                                projectTitle="Eat the Veggie Burger"
                                imageSrc="./images/Burger.jpg"
                                externalCodeLink="https://github.com/malmi003/Veggie-Burger-Logger"
                                codeTitle="Eat the Veggie Burger Code"
                                description="An app designed to help you explore the world of meatless burgers (and demo the use of database utilization)."
                            />
                            
                        </div>
                        <div className="row mx-auto pb-4">
                            <PortfolioCard 
                                externalProjectLink="https://malmi003.github.io/Word-Guess-Game/"
                                projectTitle="Word Guess Game"
                                imageSrc="./images/Hangperson.jpg"
                                externalCodeLink="https://github.com/malmi003/Word-Guess-Game"
                                codeTitle="Word Guess Game Code"
                                description="Explore MN trees by playing this classic word-guess game"
                            />
                            <PortfolioCard 
                                externalProjectLink="https://malmi003.github.io/Trivia-Game/"
                                projectTitle="Vege Trivia Game"
                                imageSrc="./images/Vege.jpg"
                                externalCodeLink="https://github.com/malmi003/Trivia-Game/"
                                codeTitle="Trivia Game Code"
                                description="Help spread the fun of growing your own food by testing your knowledge of vegetable seedlings"
                            />
                            
                        </div>
                    </div>
                    <div className="col-lg-3"><TechnologySideBar /></div>
                </div>

                
            </div>
        );
    };
};

export default Portfolio;