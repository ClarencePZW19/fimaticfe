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

class GameSummary extends Component {
    postGameSummaryStage = this.props.postGameSummaryStage;
    render() {
        console.log(this.props.gameControls);
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
                    {/*<ChooseAllocation></ChooseAllocation>*/}
                    </Col>
                </Container>
                <Button style={singleButtonStyle} onClick={this.postGameSummaryStage}>Proceed to next month</Button>
                <div><img src = {Logo} style = {LIFYlogo}></img></div>
            </div>
        )
    }
}

export default GameSummary;