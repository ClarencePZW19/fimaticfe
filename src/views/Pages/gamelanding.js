import React, {Component} from 'react';
import {Button} from "reactstrap";
import {
    backgroundImg,
    imgsinglePillButtonStyle,
    overviewTitle,
    singleButtonStyle,
    singlePillButtonStyle
} from "../../css";



class GameLanding extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){
        const {episodeName} = this.props;
        return (
            <div style={backgroundImg}>
                <div style={overviewTitle}><h1>{episodeName}</h1></div>
                <Button style={imgsinglePillButtonStyle}
                        onClick={this.saveAndContinue}>Proceed</Button>{' '}
            </div>
        )
    }
}

export default GameLanding;