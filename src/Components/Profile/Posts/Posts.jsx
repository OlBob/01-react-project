import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <div className={style.myPost}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="Input your text"
          name="Message"
          rows="5"
        />
        <div className={style.buttons}>
          <button className={style.submit} onClick={onAddPost}>
            Add post
          </button>
          <button className={style.delete}>Delete</button>
        </div>
      </div>
      <div className={style.publishedPosts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
