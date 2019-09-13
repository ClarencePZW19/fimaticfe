import React, {Component} from 'react';


class ChooseAllocation extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e) {
        e.preventDefault();
        console.log(e);
        this.props.history.push({pathname: "/gamestart"})

    }
    render(){
        return <div className="App">
            <header className="App-header">
            </header>
        </div>
    }

}
export default ChooseAllocation