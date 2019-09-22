import React, {Component} from 'react';
import PortfolioSummary from "./Components/PortfolioSummary";


class GameEnd extends Component {
    constructor(props){
        super(props);
        this.state = this.props.location.state;
    }
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">

                    <h1>GAME OVER</h1>

                    <h2>DO NOT HAVE 0 SAVINGS </h2>
                </header>
            </div>
        )
    }
}

export default GameEnd;