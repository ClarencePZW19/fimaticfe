import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Alert from "reactstrap/es/Alert";
import ChooseAllocation from "./Components/ChooseAllocation";

class PortfolioAllocation extends Component {

    constructor(props) {

        super(props);
        this.state = {
            error: false,

        }
    }


    render() {

        return <div className="App">
            <header className="App-header">
                <ChooseAllocation ></ChooseAllocation>
            </header>
        </div>
    }

}

export default PortfolioAllocation