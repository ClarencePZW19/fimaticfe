import React, {Component} from 'react';
import {Button, Card, CardHeader, CardText, CardBody} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";


class GameDecision extends Component {

    // saveAndContinue = (e) => {
    //     this.props.nextStage()
    // };

    handleChange = (e) =>{
        console.log(e);
        this.props.handleChange(e);
        this.props.postDecisionStage();
    };

    render() {
        const {descriptionStart,products,effects} = this.props;
        // const {values} = this.props;
        console.log(effects);

        function formatEffect(effect){
            if(effect%1 == 0 && effect != 1 && effect != -1){
                return"  $" + effect.toString()
            }else{
                return "  "  + (effect*100).toString() + "%"
            }
        }

        return (
            <div>
                <Container>
                    <Row>
                        {descriptionStart}
                    </Row>
                    <Row>
                        <p>
                            What would you do?
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(0)}>{products[0].toUpperCase() + formatEffect(effects[0]) }</Button>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(1)}>{products[1].toUpperCase() + formatEffect(effects[1])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(2)}>{products[2].toUpperCase() + formatEffect(effects[2])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(3)}>{products[3].toUpperCase() + formatEffect(effects[3])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(4)}>Do Nothing</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GameDecision;