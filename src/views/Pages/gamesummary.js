import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";



class GameSummary extends Component {
    render(){
        return (
            <div >
                <Card>
                    <CardHeader>
                        <h2>End of month Summary</h2>
                        <h3>Monthly Spending</h3>
                        <h3>Monthly Earning</h3>
                    </CardHeader>
                    <CardBody>
                        <Button>Increase Bonds</Button>
                        <Button>Decrease Bonds</Button>
                        <Button>Increase Investments</Button>
                        <Button>Decrease Investments</Button>
                        <Button>Increase Savings</Button>
                        <Button>Decrease Savings</Button>
                        <Button>Buy Housing Insurance</Button>
                        <Button>Buy xx Insurance</Button>
                    </CardBody>
                    <Button> Proced </Button>
                </Card>
            </div>
        )
    }
}

export default GameSummary;