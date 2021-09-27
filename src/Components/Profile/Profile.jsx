import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts posts={props.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;
