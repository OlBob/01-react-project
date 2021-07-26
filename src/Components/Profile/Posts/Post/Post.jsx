import React from "react";
import style from "./Post.module.css";

const Post = (props) => {

  // debugger;

  return (
    <div className={style.item}>
      <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" alt=""/>
      <div className={style.message}>
        {props.message}
      </div>
      <div>
        <span> like {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post;
