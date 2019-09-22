import React, {Component} from 'react';
import {Services} from "../_services";

class ProductRecommendation extends Component{

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // JSON.parse(localStorage.getItem('user')).
        let recomObject = {"ID":1,
            "episode_no":2,
            "newnetworth":58000,
            "new_insurance_basic_health":0,
            "new_insurance_critical_illness":0,
            "new_insurance_home":0,
            "new_insurance_travel":1,
            "decisionscore_investment":0.74,
            "decisionscore_bonds":0.1,
            "decisionscore_savings":0.42}
            Services.recommend(recomObject).then(result=>{
                console.log(result);
            }).catch(error =>{
                console.log(error);
                }

            );

    }

    render(){
        let endstate = this.props.location;
        console.log(this.props);
        console.log(this.props.location);
        return (<div className="App">
            <header className="App-header">
                <h1>BUY DBS PRODUCTS</h1>
            </header>
        </div>)
    }

}
export default ProductRecommendation