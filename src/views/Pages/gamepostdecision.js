import React, {Component} from 'react';
import {Button} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import PortfolioSummary from "../Components/PortfolioSummary";

class GamePostDecision extends Component {
    saveAndContinue = () => this.props.nextStage();
    render(){
        const {selectedHeadline,selectedDescription,selectedProduct,selectedEffect} = this.props;
        let selectedEffectstr = "";
        if(selectedEffect%1 == 0){
            selectedEffectstr = "$" + selectedEffect.toString()
        }else{
            selectedEffectstr = (100 * selectedEffect).toString()  + "%"
        }
        return (
            <div >

                <Container>
                    <Row>
                        <h2>{selectedHeadline}</h2>
                    </Row>
                    <br/>
                    <Row>
                        <h3>Headline</h3>
                    </Row>
                    <br/>

                    <Row>
                            {selectedDescription}
                    </Row>
                    <br/>
                    <Row>
                        Your {selectedProduct} has been affected by: {selectedEffectstr}
                    </Row>
                    <Button
                        onClick={this.saveAndContinue}> Proceed </Button>
                </Container>
            </div>
        )
    }
}

export default GamePostDecision;