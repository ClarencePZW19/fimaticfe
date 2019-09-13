import React, {Component} from 'react';
import {Button} from "reactstrap";



class GameLanding extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){
        return (
            <div >
                <h2>hello world</h2>
                <h2>{"Epasdisode Name"}</h2>
                <Button color="primary"
                        onClick={this.saveAndContinue}>Hello</Button>{' '}
            </div>
        )
    }
}

export default GameLanding;