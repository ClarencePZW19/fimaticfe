import React, {Component} from 'react';
import {Button} from "reactstrap";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";



class GameDecision extends Component {
    render(){
        return (
            <div >
                <Card>
                    <CardHeader>
                        <h2>Stage Description</h2>
                    </CardHeader>
                    <CardBody>
                        <Button>Option 1</Button>
                        <Button>Option 2</Button>
                        <Button>Option 3</Button>
                        <Button>Option 4</Button>
                        <Button>Option 5</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default GameDecision;