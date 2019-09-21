import React, {Component} from 'react';
import {Button} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import ChooseAllocation from "../Components/ChooseAllocation";
import PortfolioSummary from "../Components/PortfolioSummary";
import ProfilePicture from "../Components/ProfilePicture";
import {singleButtonStyle, textArea} from "../../css";
import Col from "reactstrap/es/Col";

class GameSummary extends Component {
    postGameSummaryStage = this.props.postGameSummaryStage;

    render() {
        let spendings = 1000;
        let earnings = 3500;
        return (


            <div>
                <Container>
                    <h2>End of month Summary</h2>
                    <div style = {textArea}>
                    <Row>
                        <Col>
                            <ProfilePicture/>
                        </Col>
                        <Col>
                            <h4>Caroline Wozniacki</h4>
                            <p>Monthly Earnings: {earnings}</p>
                            <p>Monthly Spending: {spendings}</p>
                        </Col>
                    </Row>
                    </div>
                    <PortfolioSummary/>
                    {/*<ChooseAllocation></ChooseAllocation>*/}
                </Container>
                <Button style={singleButtonStyle} onClick={this.postGameSummaryStage}>Proceed to next month</Button>
            </div>
        )
    }
}

export default GameSummary;