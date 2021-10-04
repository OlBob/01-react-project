import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
