import React, {Component} from 'react';
import RegisterForm from "./Components/RegisterForm";

class Register extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        console.log(e);
        this.props.history.push({pathname: "/overview"})

    }

    render() {
        return <div className="App">
            <header className="App-header">
                <RegisterForm submitForm={this.submitForm}/>
            </header>
        </div>
    }

}

export default Register