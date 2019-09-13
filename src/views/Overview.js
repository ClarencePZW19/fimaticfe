import React, {Component} from 'react';
import {data} from "./Data";
import Button from "reactstrap/es/Button";

class Overview extends Component{

    constructor(props) {
        super(props);
    }
    toAllocation(){
        this.props.history.push({pathname: "/chooseallocation"})
    }
    render(){
        const overview = data[0];
        console.log(overview);
        return (<div className="App">
            <header className="App-header">

                <h1>{overview.title}</h1>
                <h2>{overview.headlineStart}</h2>
                <br/>

                <p>
                    {overview.descriptionStart}
                </p>
                <Button
                    onClick={()=>this.toAllocation()}>

                    {"Proceed to choose allocation"}
                </Button>
            </header>
        </div>)
    }

}
export default Overview