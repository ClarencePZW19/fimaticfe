import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Alert from "reactstrap/es/Alert";
import {doubleButtonStyle, pageComponentStyle, singlePillButtonStyle, titleStyle} from "../../css";
import {populateInsurance} from "../../_utils";
import PortfolioSummary from "./PortfolioSummary";


class ChooseAllocation extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            error: false,

            earnings: 800,
            networth:0,
            spendings: 300,
            gameControls: {
                stocks: {
                    value: 0,
                },
                bonds: {
                    value: 0,
                },
                savings: {
                    value: 20000.0,
                },
                insurance: {
                    value: [false, false, false, false],
                }
            },
        };
    }
    componentDidMount() {
        console.log(this.props.gameControls);
        this.setState({
            gameControls:this.props.gameControls,
            networth:this.props.networth
        })
    }
    componentDidUpdate(prevProps) {
        if(this.props.gameControls !== prevProps.gameControls){
            this.setState({
                gameControls:this.props.gameControls,
                networth:this.props.networth
            })
        }
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextState!= this.state){
    //         console.log(nextState);
    //         console.log(this.state);
    //     }
    //     // this.setState({
    //     //     gameControls:nextProps.gameControls,
    //     // })
    // }

    checkActionValid(updatedGameControls) {
        let savings = this.state.gameControls.savings.value;

        //check if the total savings is less than fixedSavings
        //check if it is insurance
        console.log(updatedGameControls);
        let values = Object.values(updatedGameControls);
        let total = 0;
        let lessThanZeroCheck = false;
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i].value < 0) {
                lessThanZeroCheck = true;
            }
            total = total + values[i].value;
        }

        if (savings <= 0 || total > this.state.fixsavings || lessThanZeroCheck) {
            this.setState({
                error: true,
            });

            return false
        } else {
            return true
        }
    }

    handleChange = (name, multi) => {
        console.log(name,multi);
        let effect;
        if (name != "insurance") {
            effect = 0.05 * multi * this.state.networth;
        } else {
            //choice of insurance to buy
            console.log(multi);
            effect = multi;
            console.log(effect);
        }
        console.log(effect);
        this.editGameControls(name, effect);
    };

    editGameControls(name, effect) {
        console.log(name);
        console.log(effect);
        const updatedControls = {
            ...this.state.gameControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        const updatedFormSavings = {
            ...updatedControls["savings"]
        };
        let tempvalue;
        let savings;
        // add check to see if action could take place
        if (name !== "insurance") {
            if (effect % 1 === 0 && effect != 1 && effect != -1) {

                tempvalue = updatedFormElement.value + effect;
                savings = updatedFormSavings.value - effect;
            } else {
                tempvalue = updatedFormElement.value + updatedFormElement.value * (effect);
                savings = updatedFormSavings.value - updatedFormElement.value * (effect);
            }
            updatedFormElement.value = tempvalue;
            updatedControls[name] = updatedFormElement;

            updatedFormSavings.value = savings;
            updatedControls["savings"] = updatedFormSavings;

            console.log(updatedControls);
            if (this.checkActionValid(updatedControls)) {
                this.setState({
                    error: false,
                    gameControls: updatedControls
                });
            }

        } else {
            tempvalue = true;
            if (updatedFormElement.value[effect]) {

            } else {
                let costs = 0;
                if (effect == 0) {
                    costs = 1000
                } else if (effect == 1) {
                    costs = 2000
                } else if (effect == 2) {
                    costs = 1500
                } else if (effect == 3) {
                    costs = 500
                } else {

                }
                //reduction of costs
                savings = updatedFormSavings.value - costs;
                updatedFormSavings.value = savings;
                updatedControls["savings"] = updatedFormSavings;

                //update insurance array
                updatedFormElement.value[effect] = tempvalue;
                updatedControls[name] = updatedFormElement;
                console.log(updatedControls);
                if (this.checkActionValid(updatedControls)) {
                    this.setState({
                        error: false,
                        gameControls: updatedControls
                    });
                }

            }

        }

    }

    toParGameStart() {
        let toSend = this.state.gameControls;
        this.props.history.push({pathname: "/gamestart", state: {toSend}})
    }

    render() {
        // let {earnings, spendings} = this.state;
        // // let savings = this.state.gameControls.savings.value;
        // let values = Object.values(this.state.gameControls);

        let error = this.state.error;
        return <div style={pageComponentStyle}>
            <h1 style={titleStyle}>Your Holdings</h1>
            <Alert color="danger" isOpen={error}>
                Please note that you only have as much as {this.state.fixsavings} to allocate your funds to
            </Alert>

            <PortfolioSummary gameControls={this.state.gameControls}></PortfolioSummary>
            <br/>

                <h5> Increase or Decrease your Bond holdings : </h5>
            <Row>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("bonds", 1)}>Increase Bonds by
                    5%</Button>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("bonds", -1)}>Decrease Bonds by
                    5%</Button>
            </Row>


                <h5> Increase or Decrease your Stock holdings : </h5>

            <Row>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("stocks", 1)}>Increase Stocks by
                    5%</Button>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("stocks", -1)}>Decrease Stocks by
                    5%</Button>
            </Row>
            <br/>
            <Row>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("insurance", 2)}>Buy Housing
                    Insurance for
                    $1500</Button>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("insurance", 3)}>Buy Travel Insurance
                    for $500</Button>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("insurance", 1)}>Buy Critical Illness
                    Insurance
                    $2000</Button>
                <Button style={doubleButtonStyle} onClick={() => this.handleChange("insurance", 0)}>Buy Basic Health
                    Insurance for
                    $1000</Button>
            </Row>

            <br/>
            <Button style={singlePillButtonStyle}
                    onClick={() => this.toParGameStart()}>

                {"Proceed to Start Game"}
            </Button>
        </div>
    }

}

export default ChooseAllocation