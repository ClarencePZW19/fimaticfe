import React, {Component} from 'react';
import {data} from "./Data";
import Button from "reactstrap/es/Button";
import {withRouter} from "react-router-dom";
import {
    componentStyle,
    headline, navBar,
    pageComponentStyle,
    paratext,
    singleButtonStyle,
    textArea,
    title,
    titleStyle
} from "../css";
import Navbar from "./Components/Navbar";

class Overview extends Component {

    constructor(props) {
        super(props);
    }

    toAllocation() {
        this.props.history.push({pathname: "/portfolioallocation" +
                ""})
    }

    render() {
        const overview = data[0];
        return (

            <div style={pageComponentStyle}>
                <Navbar/>
                <div style={componentStyle}>
                    <div style={titleStyle} ><h3>{overview.title}</h3></div>

                    <div style={headline}><h3>{overview.headlineStart}</h3></div>
                    <br/>

                    <div style={paratext}>
                    <p>
                        {overview.descriptionStart}
                    </p>
                    </div>
                    <Button style={singleButtonStyle}
                            onClick={() => this.toAllocation()}>

                        {"Proceed"}
                    </Button>
                </div>
        </div>
        )
    }

}

export default withRouter(Overview)