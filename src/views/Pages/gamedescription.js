import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";



class GameDescription extends Component {

    saveAndContinue = () => this.props.nextStage();

    render(){

        return (
            <div >
                <Card>
                    <CardHeader>
                        <h2>Title</h2>
                        <h3>Headline here</h3>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {"THIS IS THE START OF THE DESCRIPTION"}
                        </CardText>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            {"These are the effects that happened on your investments"}
                        </CardText>
                    </CardBody>
                </Card>

                <Button color="primary"
                        onClick={this.saveAndContinue}>Proceed</Button>
            </div>
        )
    }
}

export default GameDescription;