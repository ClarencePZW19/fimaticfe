import React, {Component} from 'react';
import {data} from "./Data";
import Button from "reactstrap/es/Button";
import {withRouter} from "react-router-dom";
import {
    headline, navBar,
    pageComponentStyle,
    singleButtonStyle,
    textArea,
    title,
    titleStyle,
    dividerText,
    OverviewStyle,
    LIFYlogo
} from "../css";
import Navbar from "./Components/Navbar";
import {Services} from "../_services";
import Logo from "../assets/LIYF_brand.png"

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
                <div style={OverviewStyle} ><h3>Welcome to DBS LIYF!</h3></div>
                <div style={dividerText}>
                    <div style={headline}><h3> Lets Imagine Your Future </h3></div>
                    <div style={dividerText}>
                    <p>
                        In order for us to create the most immersive experience for you, please include as accurate information as you can. 
                    </p>
                    <p>We hope you have fun and enjoy!</p>
                    </div>
                    <Button style={singleButtonStyle}
                            onClick={() => this.toAllocation()}>
                        {"Proceed"}
                    </Button>
                <div><img src = {Logo} style = {LIFYlogo}></img></div> 
                </div>
        </div>
        )
    }

}

export default withRouter(Overview)