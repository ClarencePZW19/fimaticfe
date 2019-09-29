import React, {Component} from 'react';
import {Button, Card, CardHeader, CardText, CardBody} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {pageComponentStyle, dividerText, titleStyle, LIFYlogo} from "../../css";
import PortfolioSummary from "../Components/PortfolioSummary";
import Logo from "../../assets/LIYF_brand.png"

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
            <div style={dividerText}>
                <h1>Time to choose</h1>
                <PortfolioSummary gameControls={this.props.gameControls}/>
                <Container>
                    <Row>
                        {descriptionStart}
                    </Row>
                    <Row>
                        <h4>
                            What would you do?
                        </h4>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(0)}>{products[0].charAt(0).toUpperCase() + products[0].slice(1) + formatEffect(effects[0]) }</Button>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(1)}>{products[1].charAt(0).toUpperCase() + products[1].slice(1) + formatEffect(effects[1])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(2)}>{products[2].charAt(0).toUpperCase() + products[2].slice(1) + formatEffect(effects[2])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(3)}>{products[3].charAt(0).toUpperCase() + products[3].slice(1) + formatEffect(effects[3])}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={()=>this.handleChange(4)}>Do Nothing</Button>
                        </Col>
                    </Row>
                </Container>
                <h4></h4>
                <div><img src = {Logo} style = {LIFYlogo}></img></div>
            </div>
        )
    }
}

export default GameDecision;