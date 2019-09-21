import React, {Component} from 'react';
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import InputGroup from "reactstrap/es/InputGroup";
import InputGroupText from "reactstrap/es/InputGroupText";
import Alert from "reactstrap/es/Alert";


class RegisterForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error:false,
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) this.props.history.push('/');
    }


    render() {
        let error = this.state.error;
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
                <Button
                    size="lg"
                    type="submit"
                    color={'#CC0000'}

                >Login</Button>
            </Form>
        </div>
    }

}
export default RegisterForm