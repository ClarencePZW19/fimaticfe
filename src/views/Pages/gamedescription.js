import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Container from "reactstrap/es/Container";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";


class GameDescription extends Component {

    saveAndContinue = () => this.props.nextStage();

    back = (e) => {
        e.preventDefault();
        this.props.prevStage();
    };

    render() {
        const {descriptionStart, headlineStart, title,scproductName,scproductEffect} = this.props;
        var scproductEffectStr = "";
        if(scproductEffect%1 == 0){
            scproductEffectStr = "$" + scproductEffect.toString()
        }else{
            scproductEffectStr = (100 * scproductEffect).toString()  + "%"
        }
        return (
            <div>
                <Container>
                    <Row>
                        <h2>{title}</h2>
                    </Row>
                    <br/>
                    <Row>
                        <h3>{headlineStart}</h3>
                    </Row>
                    <br/>
                    <Row>
                        {descriptionStart}
                    </Row>
                    <br/>
                    <Row>
                        Your {scproductName} has been affected by: {scproductEffectStr}
                        {/*{"These are the effects that happened on your investments"}*/}
                    </Row>

                    <Button color="primary"
                            onClick={this.saveAndContinue}>Proceed</Button>
                </Container>
            </div>
        )
    }
}

export default GameDescription;