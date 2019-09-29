import React, {Component} from 'react';
import Table from "reactstrap/es/Table";
import bonds from "../../assets/5_bonds.png"
import stocks from "../../assets/5_investments.png"
import savings from "../../assets/5_savings.png"
import insurance from "../../assets/5_insurance.png"
import {paratext, iconImg} from "../../css";
import Button from "reactstrap/es/Button";
import Row from "reactstrap/es/Row";
import {populateInsurance} from "../../_utils";

class PortfolioSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameControls: {
                stocks: {
                    value: 1000.0,
                },
                bonds: {
                    value: 3500.0,
                },
                savings: {
                    value: 1000.0,
                },
                insurance: {
                    value: [true, true, true, false],
                }
            },
        }
    }

    render() {
        let gameControls = this.props.gameControls;
        let insurance = gameControls.insurance.value;
        console.log(gameControls);
        let insuranceStr = populateInsurance(gameControls.insurance.value);
        console.log(insuranceStr);

        return (
            <Table
                borderless={true}
            >
                <tbody>
                <tr>
                    <td align="center">
                        <div style={iconImg}>
                            <img src={bonds} alt={""}></img>
                        </div>
                    </td>
                    <td align="center">
                        <div style={iconImg}>
                            <img src={stocks} alt={""}></img>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td align="center">
                        <p style={paratext}>
                            Bonds : $ {gameControls.bonds.value}
                        </p>
                    </td>
                    <td align="center">
                        <p style={paratext}>
                            Stocks : $ {gameControls.stocks.value}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <div style={iconImg}>
                            <img src={savings} alt={""}></img>
                        </div>
                    </td>

                    <td align="center">
                        <div style={iconImg}>
                            <img src={insurance} alt={""}></img>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td align="center">
                        <p style={paratext}>
                            Savings : $ {gameControls.savings.value}
                        </p>
                    </td>
                    <td align="center">
                        {}
                        <p style={paratext}>
                            Insurance : {insuranceStr}
                        </p>
                    </td>
                </tr>
                </tbody>
                <h4></h4>
            </Table>)
    }

}

export default PortfolioSummary