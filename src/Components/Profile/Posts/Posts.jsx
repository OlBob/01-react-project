import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Posts = () => {

  // debugger

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <CreatePost />
      <div className={style.publishedPosts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="It's my first post" likesCount="20" />
      </div>
    </div>
  )
}

export default Posts;
