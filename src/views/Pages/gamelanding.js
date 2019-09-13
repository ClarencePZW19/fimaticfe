import React, {Component} from 'react';
import {Button} from "reactstrap";



class GameLanding extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){
        const {episodeName} = this.props;
        return (
            <div >
                <h1>{episodeName}</h1>
                <Button color="primary"
                        onClick={this.saveAndContinue}>Proceed</Button>{' '}
            </div>
        )
    }
}

export default GameLanding;