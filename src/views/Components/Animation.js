import React, {Component} from 'react';
import animation from "../../assets/money_gif_2.gif"
import {AnimatonStyle} from "../../css";


class Animation extends Component {

    render() {
        return (
            <div style={AnimatonStyle}>
                <img src={animation}></img>
            </div>
        )
    }

}

export default Animation