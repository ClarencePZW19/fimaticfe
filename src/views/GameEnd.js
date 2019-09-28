import React, {Component} from 'react';
import PortfolioSummary from "./Components/PortfolioSummary";
import {singlePillButtonStyle} from "../css";
import Button from "reactstrap/es/Button";


class GameEnd extends Component {
    constructor(props){
        super(props);
        this.state = this.props.location.state;
    }
    toPortfolio = (e) => {
        this.props.history.push({pathname:"/portfolioallocation"})
    };
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">

                    <h1>GAME OVER</h1>

                    <h2>Do remember to keep some savings </h2>
                    <Button style={singlePillButtonStyle} onClick={()=> this.toPortfolio()}>Lets try again!</Button>
                </header>
            </div>
        )
    }
}

export default GameEnd;