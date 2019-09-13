import React, {Component} from 'react';


class Overview extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    toAllocation(){
        this.props.history.push({pathname: "/gamestart"})

    }
    render(){
        return <div className="App">
            <header className="App-header">
            </header>
        </div>
    }

}
export default Overview