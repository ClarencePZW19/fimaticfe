import React, {Component} from 'react';
import profile from "../../assets/5_profile.png"
import {ProfileImg} from "../../css";


class ProfilePicture extends Component {

    render() {
        return (
            <div style={ProfileImg}>
                <img src={profile}></img>
            </div>
        )
    }

}

export default ProfilePicture