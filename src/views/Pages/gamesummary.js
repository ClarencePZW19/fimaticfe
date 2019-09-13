import React, {Component} from 'react';
import {Button} from "reactstrap";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";


class GameSummary extends Component {
    render() {

        const {earnings, spendings} = this.props;

        return (
            <div>
                <Container>
                    <Row>
                        <h3>End of month Summary</h3>
                    </Row>
                    <Row>
                        <h6>Monthly Earnings</h6>
                        <h6>{earnings}</h6>
                    </Row>
                    <Row>
                        <h6>Monthly Spending : </h6>
                        <h6>{spendings}</h6>
                    </Row>

                    <Row>

                    </Row>
                    <Row>
                        <Col xs="6"sm="6">
                        <Button size="lg" >Increase Bonds by 5%</Button>
                        </Col>
                        <Col xs="6"sm="6">
                        <Button size="lg">Decrease Bonds by 5%</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6"sm="6">
                        <Button size="lg">Increase Investments by 5%</Button>
                        </Col>
                        <Col xs="6"sm="6">
                        <Button size="lg">Decrease Investments by 5%</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6"sm="6">
                        <Button size="lg">Increase Savings by 5%</Button>
                        </Col>
                        <Col xs="6"sm="6">
                        <Button size="lg">Decrease Savings by 5%</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6"sm="6">
                        <Button size="lg">Buy Housing Insurance</Button>
                        </Col>
                        <Col xs="6"sm="6">
                        <Button size="lg">Buy xx Insurance</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GameSummary;