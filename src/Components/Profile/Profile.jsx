import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts
          profilePage={props.profilePage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile;
