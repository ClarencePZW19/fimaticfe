import React, {Component} from 'react';
import Table from "reactstrap/es/Table";
import bonds from "../../assets/5_bonds.png"
import stocks from "../../assets/5_investments.png"
import savings from "../../assets/5_savings.png"
import insurance from "../../assets/5_insurance.png"
import {paratext} from "../../css";

class PortfolioSummary extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Table
                borderless={true}
            >
                <tr>
                    <td>
                        <div>
                            <img src={bonds} alt={""}></img>
                        </div>
                    </td>
                    <td>
                        <p style={paratext}>
                            Bonds : $2200
                        </p>
                    </td>
                    <td>
                        <div>
                            <img src={stocks} alt={""}></img>
                        </div>
                    </td>
                    <td>
                        <p style={paratext}>
                            Stocks : $2200
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <img src={savings} alt={""}></img>
                        </div>
                    </td>
                    <td>
                        <p style={paratext}>
                            Savings : $2200
                        </p>
                    </td>
                    <td>
                        <div>
                            <img src={insurance} alt={""}></img>
                        </div>
                    </td>
                    <td>
                        <p style={paratext}>
                            Insurance : $2200
                        </p>
                    </td>
                </tr>
            </Table>)
    }

}

export default PortfolioSummary