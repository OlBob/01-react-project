import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo profile={props.profile} />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
