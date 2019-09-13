import React, {Component} from 'react';
import {Button} from "reactstrap";
import GameLanding from "./Pages/gamelanding";
import GameDescription from "./Pages/gamedescription";
import GameSummary from "./Pages/gamesummary";
import GamePostDecision from "./Pages/gamepostdecision";
import GameDecision from "./Pages/gamedecision";

class GameStart extends Component {
    constructor(props){
        super(props);
        this.state = {
            stage:1,
            episodeName: "",
            pivotNum: 1,
            title:"",
            headlineStart:"",
            descriptionStart:"",
            objective:"",
            scproductName:"",
            scproductEffect: 0.0,
            nextPivot:[],
            descriptionEnd:"",
            optionOne:"",
            optionTwo:"",
            optionThree:"",
            optionFour:"",
            optionFive:"",
            outcomeProb : 0,
            headlineOne:"",
            descriptionOne:"",
            ocproductOneName:"",
            ocEffectOne:0.0,
            ocproductTwoName:"",
            ocEffectTwo:0.0,
        }
    }
    nextStage = () => {
        const { stage } = this.state;
        this.setState({
            stage: stage + 1
        })
    };

    prevStage = () => {
        const { stage } = this.state;
        this.setState({
            stage: stage - 1
        })
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const updatedControls = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };

        updatedFormElement.value = value;
        updatedControls[name] = updatedFormElement;
        this.setState({
            formControls: updatedControls
        })
    };
    render(){

        const { stage } = this.state;

        console.log(stage);
        switch(stage){
            case 1:
                return <GameLanding
                    nextStage = {this.nextStage}
                    handleChange = {this.handleChange}

                ></GameLanding>;
            case 2:
                return <GameDescription
                    nextStage={this.nextStage}
                    prevStage={this.prevStage}
                    handleChange={this.handleChange}

                ></GameDescription>;
            case 3:
                return<GameDecision></GameDecision>;
            case 4:
                return <GamePostDecision></GamePostDecision>
            case 5:
                return <GameSummary></GameSummary>
        }

        // const gamelanding = (this.state.stage===1) && (
        //     <GameLanding
        //         nextStage = {this.nextStage}
        //         handleChange = {this.handleChange}
        //     />
        // );
        // const gamedescription = (this.state.stage===2) && (
        //     <GameDescription></GameDescription>
        // );
        // const gameDecision = (this.state.stage===3) && (
        //     <GameDecision></GameDecision>
        // );
        // const gamePostDecision = (this.state.stage ==4) && (
        //     <GamePostDecision></GamePostDecision>
        // );
        // const gameSummary = (this.state.stage == 5) && (
        //     <GameSummary></GameSummary>
        // );


        // return (
        //     <div className="App"  >
        //         <header className="App-header">
        //             {gamelanding}
        //             {gamedescription}
        //             {gameDecision}
        //             {gamePostDecision}
        //             {gameSummary}
        //         </header>
        //     </div>
        // )
    }
}

export default GameStart;