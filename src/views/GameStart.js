import React, {Component} from 'react';
import GameLanding from "./Pages/gamelanding";
import GameDescription from "./Pages/gamedescription";
import GameSummary from "./Pages/gamesummary";
import GamePostDecision from "./Pages/gamepostdecision";
import GameDecision from "./Pages/gamedecision";
import {data} from "./Data";


class GameStart extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            //5 stages per scenario
            stage: 1,
            pivotNum: 1,
            step:1,
            earnings:3000,
            spendings:1800,
            gameControls:{
                stocks:{
                    value:1000.0,
                },
                bonds:{
                    value:3500.0,
                },
                savings:{
                    value:1000.0,
                },
                insurance:{
                    value:[],
                }
            },
            episodeName:"Making my money work",
            //gamelanding
            title: "Recession News (Stocks)",
            headlineStart: "Making your Money work for you",
            descriptionStart: "There are numerous headlines of a upcoming recession but you have heard read in an analyst report recently that there are some speculations about FDI inflows by foreign investors for large infrastructure projects to curb against the recession",
            scproductName: "Stocks",
            scproductEffect: -0.05,

            nextPivot: [],
            descriptionEnd: "",

            //gamedecision
            product : ["stocks","stocks","bonds","bonds"],
            effect : [-0.20,-1,-0.2,-1],

            //gamepostdecision
            outcomeProb: 0.8,
            headlineOne: "Recession worsens - FDI inflows just a speculation..",
            descriptionOne: "The recession worsens and the FDI inflows have just been a speculation but have not actually materialised",
            ocproductOneName: "stocks",
            ocEffectOne: -0.10,

            headlineTwo:"FDI inflows slightly reduce effects of recession",
            descriptionTwo:"FDI inflows slightly reduce effects of recession",
            ocproductTwoName: "stocks",
            ocEffectTwo: -0.05,

            selectedHeadline:"",
            selectedDescription:"",
            selectedProduct :"",
            selectedEffect : ""

        }
    }
    checkActionValid(){
        let savings = this.state.gameControls.savings.value;
        if(savings<=0){
            console.log("hello");
            return false;
        }else{
            return true;
        }
        //check isf savings reaches 0
    }
    nextStage = () => {
        const {stage} = this.state;
        this.setState({
            stage: stage + 1
        })
    };

    postDecisionStage = () => {
        const {stage} = this.state;
        //calculate odds for happening
        let val = Math.random();
        console.log(val);

        let name;
        let effect;
        let desc;
        let headline;

        if(val<=this.state.outcomeProb){
            name =  this.state.ocproductOneName;
            effect = this.state.ocEffectOne;
            headline = this.state.headlineOne;
            desc = this.state.descriptionOne;

        }else{
            name =  this.state.ocproductOneName;
            effect = this.state.ocEffectOne;
            headline = this.state.headlineTwo;
            desc = this.state.descriptionTwo;
        }
        //
        this.editGameControls(name,effect);
        this.setState({
            selectedHeadline : headline,
            selectedDescription : desc,
            selectedProduct : name,
            selectedEffect  : effect,
            stage: stage + 1

        })
    };

    postGameSummaryStage = () =>{
        const{stage} = this.state;
        //change stage number to 1
        this.setState({

            stage: 1

        })
        //reload state with new index

    };
    componentDidMount() {
        // import the index
        console.log(data);
        let gameControl = this.props.location.state;
        console.log(gameControl);
        //set the data
        this.setState({

        })
    }

    handleChange = (e) => {
        console.log(e);
        let name;
        let effect;
        if(e!=undefined || e != 4){
            name = this.state.product[e];
            effect = this.state.effect[e];
        }else{
            name = "";
            effect = 0;
        }

        this.editGameControls(name,effect);
    };

    editGameControls(name, effect){
        const updatedControls = {
            ...this.state.gameControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        let tempvalue;
        let savings;
        // add check to see if action could take place
        if(effect%1 == 0 && effect != 1 && effect != -1){
            tempvalue = updatedFormElement.value + effect;
            savings = updatedFormElement.value - effect;
        }else{
            tempvalue = updatedFormElement.value + updatedFormElement.value * (effect);
            savings = updatedFormElement.value - updatedFormElement.value * (effect);
        }
        if(this.checkActionValid()){

            updatedFormElement.value = tempvalue;
            console.log(tempvalue);
            updatedControls[name] = updatedFormElement;
            updatedControls["savings"] = savings;
            this.setState({
                gameControls: updatedControls
            });
        }else{
            this.props.history.push({pathname: "/gameend",
                                state:this.state});
        }
        updatedFormElement.value = tempvalue;
        console.log(tempvalue);
        updatedControls[name] = updatedFormElement;
        updatedControls["savings"] = savings;
        this.setState({
            gameControls: updatedControls
        })
    }

    render() {
        const {stage} = this.state;
        const values = this.state.gameControls;
        console.log(stage);
        console.log(this.state.gameControls.stocks);
        switch (stage) {
            case 1:
                return (
                    <div className="App">
                            <GameLanding
                                nextStage={this.nextStage}
                                episodeName = {this.state.episodeName}
                                values = {values}
                            ></GameLanding>
                    </div>);
            case 2:
                return (
                    <div className="App">
                        <header className="App-header">
                            <GameDescription
                                nextStage={this.nextStage}
                                headlineStart = {this.state.headlineStart}
                                descriptionStart = {this.state.descriptionStart}
                                scproductName = {this.state.scproductName}
                                scproductEffect = {this.state.scproductEffect}
                                title = {this.state.title}
                                values = {values}
                            ></GameDescription>
                        </header>
                    </div>);
            case 3:
                return (<div className="App">
                    <header className="App-header">
                        <GameDecision
                            nextStage={this.nextStage}
                            postDecisionStage = {this.postDecisionStage}
                            handleChange = {this.handleChange}
                            products = {this.state.product}
                            effects = {this.state.effect}
                            descriptionStart = {this.state.descriptionStart}
                            values = {values}
                        ></GameDecision>
                    </header>
                </div>);
            case 4:
                return (<div className="App">
                    <header className="App-header">
                        <GamePostDecision
                            selectedHeadline={this.state.selectedHeadline}
                            selectedDescription={this.state.selectedDescription}
                            selectedProduct = {this.state.selectedProduct}
                            selectedEffect ={this.state.selectedEffect}
                            nextStage={this.nextStage}
                            values = {values}
                        ></GamePostDecision>
                    </header>
                </div>);
            case 5:
                return (<div className="App">
                    <header className="App-header">
                        <GameSummary
                            earnings = {this.state.earnings}
                            spendings = {this.state.spendings}
                            //endStage
                            postGameSummaryStage ={this.postGameSummaryStage}
                            values = {values}
                        ></GameSummary>
                    </header>
                </div>);
        }
    }
}

export default GameStart;