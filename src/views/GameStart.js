import React, {Component} from 'react';
import GameLanding from "./Pages/gamelanding";
import GameDescription from "./Pages/gamedescription";
import GameSummary from "./Pages/gamesummary";
import GamePostDecision from "./Pages/gamepostdecision";
import GameDecision from "./Pages/gamedecision";
import {data} from "./Data";
import {pageComponentStyle} from "../css";
import {calculateNetworth, checkLose, roundNumber} from "../_utils";
import {Services} from "../_services";


class GameStart extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            //5 stages per scenario

            stage: 1,
            // first Scenario
            scenarioId:1,
            pivotNum: 1,
            step:1,
            count:1,
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
                },


            },
            scenarioData:{
                episodeName:""
            },
            investmentsscore:0,
            savingsscore:0,
            bondsscore:0,
            savingscount:0,
            bondscount:0,
            investmentscount:0,



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
        if(stage == 2){
            //
            this.editGameControls(this.state.scenarioData.scenarioProduct,this.state.scenarioData.scenarioEffect)
        }
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
            name =  this.state.scenarioData.outcomeProductOne;
            effect = this.state.scenarioData.outcomeEffectOne;
            headline = this.state.scenarioData.headlineOne;
            desc = this.state.scenarioData.descriptionOne;

        }else{
            name =  this.state.scenarioData.outcomeProductOne;
            effect = this.state.scenarioData.outcomeEffectOne;
            headline = this.state.scenarioData.headlineTwo;
            desc = this.state.scenarioData.descriptionTwo;
        }
        //
        console.log(name);
        console.log(effect);
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
        let count = this.state.count + 1;
        let state = this.state;
        if(count > 5){
            this.props.history.push({pathname: "/endgamesummary",state: {state}});

        }

        //change stage number to 1
        this.updateComponent();
        this.setState({

            stage: 2,
            count:count
        })
        //reload state with new index

    };
    componentDidMount() {
        // import the index

        let gameControls = this.props.location.state.toSend;

        let userData = JSON.parse(localStorage.getItem('user'));

             let networth = calculateNetworth(gameControls);

        let scObject = {
            savings:gameControls.savings.value,
            stocks:gameControls.stocks.value,
            bonds:gameControls.bonds.value,
            scenarioId: this.state.scenarioId,
            userId : userData.id,
            insurance :gameControls.insurance.value,
            networth : networth,
        };
        console.log(scObject);
        let scenarioData;
        Services.getScenario(scObject).then(result =>{

            scenarioData = result;
            this.setState({
                gameControls:gameControls,
                scenarioData:scenarioData,

            })
        }).catch(error => {
            console.log(error);

        });

    }
    updateComponent(){
        let gameControls = this.state.gameControls;

        let userData = JSON.parse(localStorage.getItem('user'));

        let networth = calculateNetworth(gameControls);
        let scObject = {
            savings:gameControls.savings.value,
            stocks:gameControls.stocks.value,
            bonds:gameControls.bonds.value,
            scenarioId: this.state.scenarioId,
            userId : userData.id,
            insurance :gameControls.insurance.value,
            networth : networth,
        };
        console.log(scObject);
        let scenarioData;
        Services.getScenario(scObject).then(result =>{

            scenarioData = result;

            this.setState({
                gameControls:gameControls,
                scenarioData:scenarioData,

            })
        }).catch(error => {


        });
    }
    handleChange = (e) => {
        let name;
        let effect;
        console.log(e);
        if(e!=undefined && e != 4){
            console.log(e);
            name = this.state.scenarioData.products[e];
            effect = this.state.scenarioData.effects[e];
            this.editGameActionControls(name,effect);
        }else{
            this.postDecisionStage();
            name = "";
            effect = 0;
        }


    };

    editGameControls(name, effect){
        const updatedControls = {
            ...this.state.gameControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        // const updatedFormSavings = {
        //     ...updatedControls["savings"]
        // };
        // console.log(updatedFormSavings)
        let tempvalue;
        // let savings;
        // add check to see if action could take place
        if(effect%1 == 0 && effect != 1 && effect != -1){
            tempvalue = updatedFormElement.value + effect;
            // savings = updatedFormSavings.value - effect;
        }else{
            tempvalue = updatedFormElement.value + updatedFormElement.value * (effect);
            // savings = updatedFormSavings.value - updatedFormElement.value * (effect);
        }
        if(this.checkActionValid()){

            updatedFormElement.value = roundNumber(tempvalue);
            // updatedFormSavings.value = savings;
            updatedControls[name] = updatedFormElement;
            // updatedControls["savings"] = updatedFormSavings;
            this.setState({
                gameControls: updatedControls
            });
            if(checkLose(updatedControls)){
                this.props.history.push({pathname: "/gameend",
                    state:this.state});
            }
        }else{
            this.props.history.push({pathname: "/gameend",
                                state:this.state});
        }
        updatedFormElement.value = roundNumber(tempvalue);
        // updatedFormSavings.value = savings;
        updatedControls[name] = updatedFormElement;
        // updatedControls["savings"] = updatedFormSavings;
        this.setState({
            gameControls: updatedControls
        })
    }
    editGameActionControls(name, effect){

        //get the index of the effect in products
        //index - 1
        let decision = this.state.scenarioData.effects.indexOf(effect) + 1;
        let optimalDecision = this.state.scenarioData.optimalDecision
        let multi = 0;
        if(decision == optimalDecision){
            multi = 1;
        }

        if(name == "savings"){

            this.setState({
                savingsscore:this.state.savingsscore+multi,
                savingscount:this.state.savingscount + 1
            })
        }else if(name=="bonds"){
            this.setState({
                bondsscore:this.state.bondsscore+multi,
                bondscount:this.state.bondscount + 1
            })
        }else if(name=="stocks"){
            this.setState({
                investmentsscore:this.state.investmentsscore+multi,
                investmentscount:this.state.investmentscount + 1
            })
        }else{

        }
        const updatedControls = {
            ...this.state.gameControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        const updatedFormSavings = {
            ...updatedControls["savings"]
        };

        let tempvalue;
        let savings;
        // add check to see if action could take place
        if(effect%1 == 0 && effect != 1 && effect != -1){
            tempvalue = updatedFormElement.value + effect;
            savings = updatedFormSavings.value - effect;
        }else{
            tempvalue = updatedFormElement.value + updatedFormElement.value * (effect);
            savings = updatedFormSavings.value - updatedFormElement.value * (effect);
        }
        if(this.checkActionValid()){

            updatedFormElement.value = roundNumber(tempvalue);
            updatedFormSavings.value = roundNumber(savings);
            updatedControls[name] = updatedFormElement;
            updatedControls["savings"] = updatedFormSavings;
            this.setState({
                gameControls: updatedControls
            },this.postDecisionStage);
        }else{
            this.props.history.push({pathname: "/gameend",
                state:this.state});
        }
        updatedFormElement.value = tempvalue;
        // updatedFormSavings.value = savings;

        updatedControls[name] = updatedFormElement;
        // updatedControls["savings"] = updatedFormSavings;
        this.setState({
            gameControls: updatedControls
        })
    }


    render() {
        const {stage} = this.state;
        const values = this.state.gameControls;

        // let scProductEffect =   parsethis.state.scenarioData.scproductEffect
        switch (stage) {
            case 1:
                return (
                    <div style={pageComponentStyle}>
                            <GameLanding
                                nextStage={this.nextStage}
                                episodeName = {this.state.scenarioData.episodeName}
                                gameControls = {this.state.gameControls}

                            ></GameLanding>
                    </div>);
            case 2:
                return (
                    <div className="App">
                        <header className="App-header">
                            <GameDescription
                                nextStage={this.nextStage}
                                // headlineStart = {this.state.scenarioData.headlineStart}
                                descriptionStart = {this.state.scenarioData.descriptionStart}
                                scproductName = {this.state.scenarioData.scenarioProduct}
                                scproductEffect = {this.state.scenarioData.scenarioEffect}
                                title = {this.state.scenarioData.headlineStart}
                                gameControls = {this.state.gameControls}
                            ></GameDescription>
                        </header>
                    </div>);
            case 3:
                return (<div className="App">
                    <header className="App-header">
                        <GameDecision
                            postDecisionStage = {this.postDecisionStage}
                            handleChange = {this.handleChange}
                            products = {this.state.scenarioData.products}
                            effects = {this.state.scenarioData.effects}
                            descriptionStart = {this.state.scenarioData.descriptionStart}
                            gameControls = {this.state.gameControls}
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
                            gameControls = {this.state.gameControls}
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
                            gameControls = {this.state.gameControls}
                        ></GameSummary>
                    </header>
                </div>);
        }
    }
}

export default GameStart;