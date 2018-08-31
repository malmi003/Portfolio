import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";

class Portfolio extends Component {
    render() {
        return (
            <div className="container-fluid portfolio-body">
                <div className="row mx-auto">
                    <div className="col-md-12">
                        <h2 id="portfolio-header" class="border-bottom border-secondary pageHeader">Portfolio</h2>
                    </div>
                </div>
                <div className="row w-75 mx-auto pb-4">
                    <PortfolioCard 
                        externalProjectLink="https://malmi003.github.io/Word-Guess-Game/"
                        projectTitle="Word Guess Game"
                        imageSrc="./images/Hangperson.png"
                        externalCodeLink="https://github.com/malmi003/Word-Guess-Game"
                        codeTitle="Word Guess Game Code"
                        description="Similar to other hangperson games, the objective of this game is to guess the correct term, one letter at a time, before your number of guesses runs out."
                    />
                    <PortfolioCard 
                        externalProjectLink="https://malmi003.github.io/unit-4-game/"
                        projectTitle="Space Explorer Game"
                        imageSrc="./images/SpaceExplorer.png"
                        externalCodeLink="https://github.com/malmi003/unit-4-game"
                        codeTitle="Space Explorer Game Code"
                        description="Explore the galaxy through numbers"
                    />
                </div>
                <div className="row w-75 mx-auto pb-4">
                    <PortfolioCard 
                        externalProjectLink="https://malmi003.github.io/TriviaGame/"
                        projectTitle="Trivia Game"
                        imageSrc="./images/Vege.png"
                        externalCodeLink="https://github.com/malmi003/TriviaGame/"
                        codeTitle="Trivia Game Code"
                        description="Help spread the fun of growing your own food by testing your knowledge of seedlings."
                    />
                    <PortfolioCard 
                        externalProjectLink="https://malmi003.github.io/Train-Scheduler/"
                        projectTitle="Hogwarts Trip Planner"
                        imageSrc="./images/TrainScheduler.png"
                        externalCodeLink="https://github.com/malmi003/Train-Scheduler"
                        codeTitle="Hogwarts Trip Planner Code"
                        description="A rideshare app for those traveling to the magical world."
                    />
                </div>
                <div className="row w-75 mx-auto pb-4">
                    <PortfolioCard 
                        externalProjectLink="https://jonopacich.github.io/CB-Project-1/main.html"
                        projectTitle="Session Study App"
                        imageSrc="./images/Session.png"
                        externalCodeLink="https://github.com/JonOpacich/CB-Project-1"
                        codeTitle="Session Code"
                        description="'Session: study together' was created to facilitate study group creation in the coding bootcamp."
                    />
                    <PortfolioCard 
                        externalProjectLink="https://thawing-garden-86806.herokuapp.com/"
                        projectTitle="Friend Finder"
                        imageSrc="./images/FriendFinder.png"
                        externalCodeLink="https://github.com/malmi003/Friend_Finder"
                        codeTitle="Friend Finder Code"
                        description="Full-stack application that matches people and dogs based on their compatibility."
                    />
                </div>
                <div className="row w-75 mx-auto pb-4">
                    <PortfolioCard 
                        externalProjectLink="https://obscure-shelf-18720.herokuapp.com/"
                        projectTitle="Eat the Veggie Burger"
                        imageSrc="./images/Burger.png"
                        externalCodeLink="https://github.com/malmi003/burger"
                        codeTitle="Eat the Veggie Burger Code"
                        description="An app designed to help you explore the world of meatless burgers (and demo use of a db)."
                    />
                    <PortfolioCard 
                        externalProjectLink="https://petcupid.herokuapp.com/"
                        projectTitle="Pet Cupid"
                        imageSrc="./images/PetCupid.png"
                        externalCodeLink="https://github.com/kmvincent/Project2"
                        codeTitle="Pet Cupid Code"
                        description="This application uses the Pet Finder API to match perspective pet owners wih their ideal pet based on their survey results"
                    />
                </div>
                <div className="row w-75 mx-auto pb-4">
                    <PortfolioCard 
                        externalProjectLink="https://malmi003.github.io/Clicky-Game/"
                        projectTitle="Great Lakes Ships Clicky Game"
                        imageSrc="./images/ClickyGame.png"
                        externalCodeLink="https://github.com/malmi003/Clicky-Game"
                        codeTitle="Great Lakes Ships Clicky Game Code"
                        description="This React app was built to test your memory with some of the big ships seen in the Great Lakes."
                    />
                    <PortfolioCard 
                        externalProjectLink="https://morning-springs-85911.herokuapp.com/"
                        projectTitle="Community Class Scraper"
                        imageSrc="./images/Scraper.png"
                        externalCodeLink="https://github.com/malmi003/News-Scraper"
                        codeTitle="Community Class Scraper Code"
                        description="This app was designed to scrape the Minneapolis Public Schools Community Education website for the latest classes. After displaying each option, the app allows the user to save favorite classes and add notes for reference later."
                    />
                </div>
            </div>
        );
    };
};

export default Portfolio;