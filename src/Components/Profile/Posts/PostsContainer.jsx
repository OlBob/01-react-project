import React from "react";
import {
  addPostCreator,
  updateNewPostTextChangeCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";

/*const PostsContainer = (props) => {
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
};*/

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextChangeCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
