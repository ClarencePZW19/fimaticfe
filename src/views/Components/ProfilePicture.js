import React, {Component} from 'react';
import profile from "../../assets/5_profile.png"
import {profileImg} from "../../css";


class ProfilePicture extends Component {

    render() {
        return (
            <div style={profileImg}>
                <img src={profile}></img>
            </div>
        )
    }

}

export default ProfilePicture