import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";


class ChooseAllocation extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            earnings: 800,
            fixsavings: 20000,
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

    checkActionValid() {
        let savings = this.state.gameControls.savings.value;
        console.log(savings);
        if (savings <= 0) {
            return false
        } else {
            return true
        }
    }

    handleChange = (name, multi) => {
        console.log(name);
        let effect;
        if (name != "insurance") {
            effect = 0.05 * multi * this.state.fixsavings;
        } else {
            //choice of insurance to buy
            effect = multi;
        }
        console.log(effect);
        this.editGameControls(name, effect);
    };

    editGameControls(name, effect) {
        const updatedControls = {
            ...this.state.gameControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        const updatedFormSavings = {
            ...updatedControls["savings"]
        };
        console.log(updatedFormElement.value);
        let tempvalue;
        let savings;
        // add check to see if action could take place
        console.log(effect);
        console.log(name);
        if (name!=="insurance") {
            if (effect % 1 == 0 && effect != 1 && effect != -1) {
                tempvalue = updatedFormElement.value + effect;
                savings = updatedFormSavings.value - effect;
            } else {
                tempvalue = updatedFormElement.value + updatedFormElement.value * (effect);
                savings = updatedFormSavings.value - updatedFormElement.value * (effect);
            }
            if (this.checkActionValid()) {
                updatedFormElement.value = tempvalue;
                console.log(tempvalue);
                console.log(savings);
                updatedControls[name] = updatedFormElement;

                updatedFormSavings.value = savings;
                updatedControls["savings"] = updatedFormSavings;

                this.setState({
                    gameControls: updatedControls
                });
            } else {
                this.props.history.push({
                    pathname: "/gamestart",
                    state: this.state.gameControls
                });
            }

        } else {
            tempvalue = true;
            console.log(updatedFormElement.value[effect]);
            if(updatedFormElement.value[effect]){

            }else{
                let costs = 0;
                if(effect==0){
                    costs = 1000
                }else if(effect==1){
                    costs = 2000
                }else if(effect==2){
                    costs = 1500
                }else if(effect==3){
                    costs = 500
                }else{

                }
                //reduction of costs
                console.log(costs);
                savings = updatedFormSavings.value - costs;
                updatedFormSavings.value = savings;
                updatedControls["savings"] = updatedFormSavings;

                //update insurance array
                updatedFormElement.value[effect] = tempvalue;
                updatedControls[name] = updatedFormElement;
                console.log(this.state.gameControls.insurance);
                if (this.checkActionValid()) {
                    this.setState({
                        gameControls: updatedControls
                    });
                } else {
                    this.props.history.push({
                        pathname: "/gamestart",
                        state: this.state.gameControls
                    });

                }
            }

        }

    }
    toGameStart() {
        let toSend = this.state.gameControls;
        this.props.history.push({pathname: "/gamestart", state: {toSend}})
    }

    render() {
        let {earnings, spendings} = this.state;
        let savings = this.state.gameControls.savings.value;
        return <div className="App">
            <header className="App-header">
                <h1>Choose Allocation</h1>
                <Container>
                    <Row>
                        <h4>Remaining Savings : </h4>
                        <h4> {" $" + savings}</h4>
                    </Row>
                    <br/>
                    <Row>
                        <h6>Monthly Earnings : </h6>
                        <h6> {" $" + earnings}</h6>
                    </Row>
                    <Row>
                        <h6>Monthly Spending : </h6>
                        <h6>{" $" + spendings}</h6>
                    </Row>
                    <br/>
                    <Row>
                        <Button size="lg" onClick={() => this.handleChange("bonds", 1)}>Increase Bonds by 5%</Button>
                        <Button size="lg" onClick={() => this.handleChange("bonds", -1)}>Decrease Bonds by 5%</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button size="lg" onClick={() => this.handleChange("stocks", 1)}>Increase Stocks by 5%</Button>
                        <Button size="lg" onClick={() => this.handleChange("stocks", -1)}>Decrease Stocks by 5%</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button size="lg" onClick={() => this.handleChange("savings", 1)}>Increase Savings by
                            5%</Button>
                        <Button size="lg" onClick={() => this.handleChange("savings", -1)}>Decrease Savings by
                            5%</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button onClick={() => this.handleChange("insurance", 2)}>Buy Housing Insurance for $1500</Button>
                        <Button  onClick={() => this.handleChange("insurance", 3)}>Buy Travel Insurance for $500</Button>
                        <Button onClick={() => this.handleChange("insurance", 1)}>Buy Critical Illness Insurance $2000</Button>
                        <Button  onClick={() => this.handleChange("insurance", 0)}>Buy Basic Health Insurance for $1000</Button>
                    </Row>
                </Container>
                <br/>
                <Button
                    onClick={() => this.toGameStart()}>

                    {"Proceed to Start Game"}
                </Button>
            </header>
        </div>
    }

}

export default ChooseAllocation