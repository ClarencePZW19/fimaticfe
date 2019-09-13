import React, {Component} from 'react';


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
                    <h2></h2>
                </header>
            </div>
        )
    }
}

export default GameEnd;