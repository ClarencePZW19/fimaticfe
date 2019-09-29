import React, {Component} from 'react';
import {Button} from "reactstrap";
import {
    imgsinglePillButtonStyle,
    overviewTitle,
    singleButtonStyle,
    singlePillButtonStyle,
    LIFYlogo,
    AnimatonStyle,
} from "../../css";
import Animation from "../Components/Animation";
import money from "../../assets/money_gif_1.gif"
import Row from "reactstrap/es/Row";
import Logo from "../../assets/LIYF_brand.png"

class GameLanding extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){
        const {episodeName} = this.props;
        return (
            <div>
                <div style={overviewTitle}>
                    <h1>{episodeName}</h1></div>
                    <h1></h1>
                    <p></p>
                    
                    <div><img src={money} style = {AnimatonStyle}></img></div>
                    <div style={overviewTitle}>

                    <h2> Game Objectives:</h2>
                    <h3>
                        <p></p>
                        <Row>1. Don't let savings get to 0</Row>
                        <p></p>
                        <Row>2. End with the biggest net worth</Row>
                        <p></p>
                        <Row>3. Try to make the best decisions for each scenario</Row>
                    </h3>
                    </div>
                    <p></p>
                    <div><Button style={imgsinglePillButtonStyle}
                            onClick={this.saveAndContinue}>Proceed</Button>{' '}
                            </div>
                    <div><img src = {Logo} style = {LIFYlogo}></img></div>
            </div>
        )
    }
}

export default GameLanding;