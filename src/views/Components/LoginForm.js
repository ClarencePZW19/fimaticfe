import React, {Component} from 'react';
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import InputGroup from "reactstrap/es/InputGroup";
import InputGroupText from "reactstrap/es/InputGroupText";
import Alert from "reactstrap/es/Alert";
import {singleButtonStyle} from "../../css";


class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: false,
        }
    }

    handleChange = async event => {
        const name = event.target.name;
        await this.setState({
            [name]: event.target.value,
        })
    };

    // validate(username, password) {
    //     if(username=="charliebrown" && password == "qweasd123"){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    submitForm(e) {
        e.preventDefault();
        // this.validate(this.state.username, this.state.password);


        this.props.submitForm(this.state.username,this.state.password);

        this.setState({
            error: true
            })
        }




        render()
        {
            let error = this.state.error;
            return <div className="App">
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Alert isOpen={error} color="danger">Incorrect Username OR Password</Alert>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            {"Username: "}
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
                    <InputGroup>
                        <InputGroupText>
                            {"Password: "}
                        </InputGroupText>

                        <Input
                            bsSize="lg"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={(e) => {
                                this.handleChange(e)
                            }}

                        ></Input>
                    </InputGroup>
                    <Button
                        style={singleButtonStyle}
                    >Login</Button>
                </Form>
            </div>
        }

    }

    export
    default
    LoginForm
