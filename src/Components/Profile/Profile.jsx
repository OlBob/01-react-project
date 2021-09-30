import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts
          profilePage={props.profilePage}
          dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;
