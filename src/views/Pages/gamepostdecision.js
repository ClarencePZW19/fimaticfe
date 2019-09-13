import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";



class GamePostDecision extends Component {
    render(){
        return (
            <div >
                <Card>
                    <CardHeader>
                        <h2>End of month blah blah</h2>
                        <h3>Headline</h3>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            you lost all your money lol
                        </CardText>
                        <CardText>
                            Effects taken
                        </CardText>
                    </CardBody>
                    <Button> Proced </Button>
                </Card>
            </div>
        )
    }
}

export default GamePostDecision;