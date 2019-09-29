import React, {Component} from 'react';
import {Button} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import PortfolioSummary from "../Components/PortfolioSummary";
import {dividerText, headline, LIFYlogo} from "../../css";
import Logo from "../../assets/LIYF_brand.png"
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
            <div style={dividerText}>
                <Container>
                    <div style = {headline}>
                    <Row>
                        <h2>{selectedHeadline}</h2>
                    </Row></div>
                    <br/>
                    <div style = {headline}>
                    <Row>
                            {selectedDescription}
                    </Row>
                    </div>
                    <br/>
                    <Row>
                        <h3>{selectedProduct} affected by: {selectedEffectstr}</h3>
                    </Row>
                    <div style = {headline}>
                    <Button
                        onClick={this.saveAndContinue}> Proceed </Button></div>
                </Container>
                <div><img src = {Logo} style = {LIFYlogo}></img></div>
            </div>
        )
    }
}

export default GamePostDecision;