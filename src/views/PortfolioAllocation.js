import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import ChooseAllocation from "./Components/ChooseAllocation";
import Logo from "../assets/LIYF_brand.png"
import {LIFYlogo} from "../css";
class PortfolioAllocation extends Component {

    constructor(props) {

        super(props);
        this.state = {
            error: false,
            earnings:0,
            spendings:0,
            gameControls:{
                stocks:{
                    value:0,
                },
                bonds:{
                    value:0,
                },
                savings:{
                    value:0,
                },
                insurance:{
                    value:[],
                },
                networth:{
                    value:0,
                }
            },
        }
    }
    componentDidMount() {
        // console.log(JSON.parse(localStorage.getItem('user')));
        // let userData = JSON.parse(localStorage.getItem('user'));
        let userData = JSON.parse(localStorage.getItem('user'));
        // console.log(JSON.parse(userData));
        console.log(userData.username);
        console.log(userData["average_spendm"]);
        let earnings = userData["average_earnm"]
        let gameControls = {
                stocks:{
                    value:userData["stocks_value"],
                },
                bonds:{
                    value:userData["bonds_value"],
                },
                savings:{
                    value:userData["savings_value"],
                },
                insurance:{
                    value:userData["insurance"],
                },
                networth: {
                    value:userData["total_value"]
                }
            
            
            }

        this.setState({
            earnings:earnings,
            spendings:userData["average_spendm"],
            gameControls:gameControls,
            networth:userData["total_value"]
            });
    }

    render() {

        return <div className="App">
            <header className="App-header">
            <h5></h5>
            <div><img src = {Logo} style = {LIFYlogo}></img></div>
                <ChooseAllocation
                    history ={this.props.history}
                    gameControls = {this.state.gameControls}
                    networth={this.state.networth}
                ></ChooseAllocation>
                <h1> </h1>
            </header>
        </div>
    }

}

export default PortfolioAllocation