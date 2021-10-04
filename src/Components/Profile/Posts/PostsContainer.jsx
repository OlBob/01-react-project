import React from "react";
import Post from "./Post/Post";
import {
  addPostCreator,
  updateNewPostTextChangeCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  let state = props.store.getState();

  let postChange = (text) => {
    let action = updateNewPostTextChangeCreator(text);
    props.store.dispatch(action);
  };

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  return (
    <Posts
      updateNewPostText={postChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default PostsContainer;
