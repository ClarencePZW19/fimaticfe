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
    titleStyle,
    dividerText,
    OverviewStyle,
} from "../css";
import Navbar from "./Components/Navbar";
import {Services} from "../_services";

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:{

            }
        }
    }

    toAllocation() {
        this.props.history.push({pathname: "/portfolioallocation" +
                ""})
    }
    componentDidMount() {
        Services.getOverview().then(result =>{
            console.log(result);
            this.setState({
                data:result,
            })
        }).catch(error =>{
            console.log(error);
            this.setState({error:true})
        });


    }

    render() {
        const overview = this.state.data;
        console.log(overview);
        // console.log(data)
        return (
            <div style={pageComponentStyle}>
                <div style={OverviewStyle} ><h3>{overview.title}</h3></div>
                
                <div style={dividerText}>
                    <div style={headline}><h3>{overview.headlineStart}</h3></div>
                    <div style={dividerText}>
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