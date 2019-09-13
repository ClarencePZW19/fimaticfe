import React, {Component} from 'react';
import GameLanding from "./Pages/gamelanding";
import LoginForm from "./Components/LoginForm";






class Login extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e) {
        e.preventDefault();
        console.log(e);
        this.props.history.push({pathname: "/gamestart"})

    }
    render(){
        return <div className="App">
            <header className="App-header">
               <LoginForm
                    submitForm = {this.submitForm}
               ></LoginForm>
            </header>
        </div>
    }

}
export default Login