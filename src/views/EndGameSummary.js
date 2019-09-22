import React, {Component} from 'react';
import PortfolioSummary from "./Components/PortfolioSummary";
import {roundToZero} from "../_utils";
import Button from "reactstrap/es/Button";
import {singlePillButtonStyle} from "../css";


class EndGameSummary extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state.state;
    }
    componentDidMount() {
        const endstate = (this.props.location.state);
        let investmentscore = endstate.state.investmentsscore;
        let investmentcount = endstate.state.investmentscount;

        let bondsscore = endstate.state.bondsscore;
        let bondscount = endstate.state.bondscount;

        let savingsscore = endstate.state.savingsscore;
        let savingscount = endstate.state.savingscount;


        let investmentspoints = roundToZero(investmentscore/investmentcount) * 100;
        let bondspoints = roundToZero(bondsscore/bondscount) * 100;
        let savingspoints = roundToZero(savingsscore/savingscount) * 100;
        this.setState({
            ipoints:investmentspoints,
            bpoints:bondspoints,
            spoints:savingspoints
        })
    }

    toRecommendation =(e)=>{
        let state = this.state;
        this.props.history.push({pathname:"/productrecommendation",state: state})
    };
    render() {

        return (
            <div className="App">
                <header className="App-header">

                    <h1>GREAT GAME!</h1>
                    <PortfolioSummary gameControls = {this.state.gameControls}/>
                    <h3>Score for Stocks: {this.state.ipoints} %</h3>
                    <h3>Score for Bonds: {this.state.bpoints} %</h3>
                    <h3>Score for Savings: {this.state.spoints} %</h3>
                    <Button style={singlePillButtonStyle} onClick={()=>this.toRecommendation()}> Proceed</Button>
                </header>
            </div>
        )
    }
}

export default EndGameSummary;