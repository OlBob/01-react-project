import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Posts = () => {

  let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 15,},
    {id: 2, message: "It's my first post", likesCount: 20,}
  ]

  let postsElements = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <CreatePost/>
      <div className={style.publishedPosts}>
        {
          postsElements
        }
      </div>
    </div>
  )
}

export default Posts;
