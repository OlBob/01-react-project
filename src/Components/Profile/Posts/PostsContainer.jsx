import React from "react";
import {
  addPostCreator,
  updateNewPostTextChangeCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let postChange = (text) => {
          let action = updateNewPostTextChangeCreator(text);
          store.dispatch(action);
        };

        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        return (
          <Posts
            updateNewPostText={postChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
