import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
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
                <ChooseAllocation
                    history ={this.props.history}
                ></ChooseAllocation>
            </header>
        </div>
    }

}

export default withRouter(PortfolioAllocation)