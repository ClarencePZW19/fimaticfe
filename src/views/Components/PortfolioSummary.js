import React, {Component} from 'react';
import Table from "reactstrap/es/Table";
import bonds from "../../assets/5_bonds.png"
import stocks from "../../assets/5_investments.png"
import savings from "../../assets/5_savings.png"
import insurance from "../../assets/5_insurance.png"
import {paratext} from "../../css";
import Button from "reactstrap/es/Button";
import Row from "reactstrap/es/Row";
import {populateInsurance} from "../../_utils";

class PortfolioSummary extends Component {

    constructor(props) {
        super(props);
        this.state={
            gameControls:{
                stocks:{
                    value:1000.0,
                },
                bonds:{
                    value:3500.0,
                },
                savings:{
                    value:1000.0,
                },
                insurance:{
                    value:[true,true,true,false],
                }
            },
        }
    }

    render() {
        let gameControls = this.props.gameControls;
        console.log(gameControls);
       let insuranceStr = populateInsurance(gameControls.insurance.value);
        console.log(insuranceStr);


        return (<div></div>)
            {/*<Table*/}
            {/*    borderless={true}*/}
            {/*>*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <img src={bonds} alt={""}></img>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <p style={paratext}>*/}
            {/*                Bonds : $ {gameControls.bonds.value}*/}
            {/*            </p>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <img src={stocks} alt={""}></img>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <p style={paratext}>*/}
            {/*                Stocks : $ {gameControls.stocks.value}*/}
            {/*            </p>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <img src={savings} alt={""}></img>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <p style={paratext}>*/}
            {/*                Savings : $ {gameControls.savings.value}*/}
            {/*            </p>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <img src={insurance} alt={""}></img>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <p style={paratext}>*/}
            {/*                Insurance : {insuranceStr}*/}
            {/*            </p>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</Table>)*/}
    }

}

export default PortfolioSummary