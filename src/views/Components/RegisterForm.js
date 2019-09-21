import React, {Component} from 'react';
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import InputGroup from "reactstrap/es/InputGroup";
import InputGroupText from "reactstrap/es/InputGroupText";
import Alert from "reactstrap/es/Alert";
import {singleButtonStyle} from "../../css";

const ageOptions = [
    { value: 18, displayValue: "18" },
    { value: 19, displayValue: "19" },
    { value: 20, displayValue: "20" },
    { value: 21, displayValue: "21" },
    { value: 22, displayValue: "22" },
    { value: 23, displayValue: "23" },
    { value: 24, displayValue: "24" },
    { value: 25, displayValue: "25" },
    { value: 26, displayValue: "26" },
    { value: 27, displayValue: "27" },
    { value: 28, displayValue: "28" },
    { value: 29, displayValue: "29" },
    { value: 30, displayValue: "30" },
];

class RegisterForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error:false,
            age:0,
            formControls:{

            }
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) this.props.history.push('/');
    }
    handleChange = async event => {
        const name = event.target.name;
        await this.setState({
            [name]: event.target.value,
        })
    };

    render() {
        console.log(this.state.age);
        return <div className="App">
            <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                <InputGroup>
                    <InputGroupText>
                        {"Username : "}
                    </InputGroupText>

                    <Input
                        bsSize="lg"
                        type="text"
                        placeholder="Username/Email"
                        name="username"
                        value={this.state.username}
                        onChange={(e) => {
                            this.handleChange(e)
                        }}

                    ></Input>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        {"Password : "}
                    </InputGroupText>

                    <Input
                        bsSize="lg"
                        type="password"
                        placeholder="Password"
                        name = "password"
                        value={this.state.password}

                        onChange={(e) => {
                            this.handleChange(e)
                        }}

                    ></Input>

                </InputGroup>
                <InputGroup>
                    <InputGroupText>
                        {"Age : "}
                    </InputGroupText>
                    <Input
                        bsSize="lg"
                        type="select"
                        name = "age"
                        value={this.state.age}
                        onChange={(e) => {
                            this.handleChange(e)
                        }}

                    >
                        {ageOptions.map(option => (
                            <option value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </Input>
                </InputGroup>
                <br/>
                <Button style={singleButtonStyle}

                >Register</Button>
            </Form>
        </div>
    }

}
export default RegisterForm