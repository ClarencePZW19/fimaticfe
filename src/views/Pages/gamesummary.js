import React, {Component} from 'react';
import {Button} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import ChooseAllocation from "../Components/ChooseAllocation";
import PortfolioSummary from "../Components/PortfolioSummary";
import ProfilePicture from "../Components/ProfilePicture";
import {singleButtonStyle, textArea, ProfileAlignmentStyle, LIFYlogo} from "../../css";
import Col from "reactstrap/es/Col";
import Logo from "../../assets/LIYF_brand.png"
import {calculateNetworth} from "../../_utils";

class GameSummary extends Component {
    postGameSummaryStage = this.props.postGameSummaryStage;
    render() {

        //calculate the networth
        let networth_new =  calculateNetworth(this.props.gameControls);
        console.log(networth_new);
        //get previous worth
        let networth_prev = this.props.gameControls.tempnetworth.value;
        console.log(networth_prev);
        //calculate
        let percChange = (((networth_new - networth_prev) / networth_prev)*100).toFixed(2);

        return (
            <div>
                <Container>
                    <Col md = "auto">
                    <h2>End of month Summary</h2>
                        <div style = {ProfileAlignmentStyle}>
                            <ProfilePicture/></div>
                            <div><h3>{JSON.parse(localStorage.getItem('user')).username.toUpperCase()}</h3>
                            {/*<p>Monthly Earnings: {earnings}</p>*/}
                            {/*<p>Monthly Spending: {spendings}</p>*/}
                        </div>
                    <PortfolioSummary gameControls={this.props.gameControls}/>
                   <h2>Your networth change: {percChange} %</h2>

                    </Col>
                </Container>
                <Button style={singleButtonStyle} onClick={this.postGameSummaryStage}>Proceed to next month</Button>
                <div><img src = {Logo} style = {LIFYlogo}></img></div>
            </div>
        )
    }
}

export default GameSummary;