import React, {Component} from 'react';
import {Button, Card, CardHeader, CardText, CardBody} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {pageComponentStyle} from "../../css";
import PortfolioSummary from "../Components/PortfolioSummary";


class GameDecision extends Component {


    handleChange = (e) =>{
        console.log(e);
        this.props.handleChange(e);

    };

    render() {
        const {descriptionStart,products,effects} = this.props;
        // const {values} = this.props;
        console.log(effects);
        console.log(products);
        function formatEffect(effect){
            if(effect%1 == 0 && effect != 1 && effect != -1){
                return"  $" + effect.toString()
            }else{
                return "  "  + (effect*100).toString() + "%"
            }
        }

        return (
            <div style={pageComponentStyle}>
                <PortfolioSummary gameControls={this.props.gameControls}/>
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
                                onClick={()=>this.handleChange(0)}>{products[0] + formatEffect(effects[0]) }</Button>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(1)}>{products[1] + formatEffect(effects[1])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(2)}>{products[2] + formatEffect(effects[2])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(3)}>{products[3] + formatEffect(effects[3])}</Button>
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