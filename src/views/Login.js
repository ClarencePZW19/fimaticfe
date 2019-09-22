import React, {Component} from 'react';
import GameLanding from "./Pages/gamelanding";
import LoginForm from "./Components/LoginForm";
import DbsLogo from "../assets/2_pshift_logo.png"
class Login extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e) {
        e.preventDefault();
        console.log(e);
        this.props.history.push({pathname: "/overview"})

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