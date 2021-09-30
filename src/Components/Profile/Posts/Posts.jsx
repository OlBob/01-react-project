import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Posts = (props) => {


  let postsElements = props.profilePage.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <CreatePost
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
      />
      <div className={style.publishedPosts}>
          { postsElements }
      </div>
    </div>
  )
}

export default Posts;
