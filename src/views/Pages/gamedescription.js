import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Container from "reactstrap/es/Container";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {headline, paratext, singlePillButtonStyle, textArea, titleStyle} from "../../css";


class GameDescription extends Component {

    saveAndContinue = () => this.props.nextStage();

    back = (e) => {
        e.preventDefault();
        this.props.prevStage();
    };

    render() {
        const {descriptionStart, headlineStart, title, scproductName, scproductEffect} = this.props;
        var scproductEffectStr = "";
        if (scproductEffect % 1 == 0) {
            scproductEffectStr = "$" + scproductEffect.toString()
        } else {
            scproductEffectStr = (100 * scproductEffect).toString() + "%"
        }
        return (
            <div>
                <div style={titleStyle}>
                    <h3>{title}</h3>
                </div>

                <div style={headline}>
                    <h4>{headlineStart}</h4>
                </div>
                <div style={paratext}>
                    {descriptionStart}
                </div>

                <div style={paratext}>
                    Your {scproductName} has been affected by: {scproductEffectStr}
                    {/*{"These are the effects that happened on your investments"}*/}
                </div>
                <Button style={singlePillButtonStyle}
                        onClick={this.saveAndContinue}>Proceed</Button>
            </div>
        )
    }
}

export default GameDescription;