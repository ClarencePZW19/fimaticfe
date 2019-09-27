import React, {Component} from 'react';
import GameLanding from "./Pages/gamelanding";
import LoginForm from "./Components/LoginForm";
import DbsLogo from "../assets/2_pshift_logo.png"
import {Services} from "../_services"
class Login extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(username,password) {
        // e.preventDefault();
        // console.log(e);

        let paraObject = {
            "username"  :username,
            "password" : password
        };
        console.log(paraObject);

        localStorage.setItem('user',{
            "id": 1,
            "clusterID": 387,
            "username": "angrylion",
            "password": "qwerty123",
            "bonds_value": 0,
            "stocks_value": 0,
            "savings_value": 6000,
            "total_value": 6000,
            "average_spendm": 700,
            "average_earnm": 800,
            "average_savingsm": 100,
            "insurance": [
                false,
                false,
                false,
                false
            ]
        });
        this.props.history.push({pathname:"/overview"});

        // return Services.login(paraObject).then(result =>{
        //     console.log(result);
        //     localStorage.setItem('user',JSON.stringify(result));
        //     this.props.history.push({pathname:"/overview"})
        // }).catch(error =>{
        //     console.log(error);
        //     this.setState({error:true})
        // })


    }
    render(){
        return <div className="App">
            <header className="App-header">
                <img src={DbsLogo}></img>
                <LoginForm
                    submitForm = {this.submitForm}
               ></LoginForm>
            </header>
        </div>
    }

}
export default Login
