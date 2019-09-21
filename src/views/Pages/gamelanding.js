import React, {Component} from 'react';
import {Button} from "reactstrap";
import {backgroundImg, singleButtonStyle} from "../../css";



class GameLanding extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){
        const {episodeName} = this.props;
        return (
            <div style={backgroundImg}>
                <h1>{episodeName}</h1>
                <Button style={singleButtonStyle}
                        onClick={this.saveAndContinue}>Proceed</Button>{' '}
            </div>
        )
    }
}

export default GameLanding;