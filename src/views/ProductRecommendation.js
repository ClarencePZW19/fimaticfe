import React, {Component} from 'react';
import {Services} from "../_services";
import {calculateNetworth} from "../_utils";
import Button from "reactstrap/es/Button";
import {singleButtonStyle, singlePillButtonStyle} from "../css";

class ProductRecommendation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [
                {
                    zero: "",
                    one: "",
                    two: ""
                }, {
                    zero: "",
                    one: "",
                    two: "",
                }
            ]


        }
    }

    componentDidMount() {
        let state = this.props.location.state;
        console.log(state);
        // JSON.parse(localStorage.getItem('user')).
        // JSON.parse(localStorage.getItem('user')).
        let insurance = state.gameControls.insurance.value;
        let recomObject = {
            "ID": (JSON.parse(localStorage.getItem('user')))["clusterID"],
            "episode_no": 2,
            "newnetworth": calculateNetworth(state.gameControls),
            "new_insurance_basic_health": insurance[0],
            "new_insurance_critical_illness": insurance[1],
            "new_insurance_home": insurance[2],
            "new_insurance_travel": insurance[3],
            "decisionscore_investment": state.ipoints,
            "decisionscore_bonds": state.bpoints,
            "decisionscore_savings": state.spoints
        }

        console.log(recomObject);
        Services.recommend(recomObject).then(result => {
            console.log(result);

            this.setState({result: result})
        }).catch(error => {
                console.log(error);
            }
        );

    }

    toPortfolio = (e) => {
      this.props.history.push({pathname:"/portfolioallocation"})
    };

    render() {
        // console.log(Object.values(this.state.result[0]));
        console.log(this.state.result[0].zero);
        return (<div className="App">
            <header className="App-header">
                <h1>BUY DBS PRODUCTS</h1>
                <Button style={singleButtonStyle}
                        href={this.state.result[1].zero}>
                    {this.state.result[0].zero}
                </Button>
                <Button style={singleButtonStyle}
                        href={this.state.result[1].one}>
                    {this.state.result[0].one}
                </Button>
                <Button style={singleButtonStyle}
                        href={this.state.result[1].two}>
                    {this.state.result[0].two}
                </Button>
                <Button style={singlePillButtonStyle} onClick={()=> this.toPortfolio()}>Back to Portfolio Allocation</Button>
            </header>
        </div>)
    }

}

export default ProductRecommendation