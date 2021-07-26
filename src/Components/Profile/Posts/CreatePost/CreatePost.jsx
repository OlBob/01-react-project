import React from "react";
import style from "./CreatePost.module.css";


const CreatePost = () => {
  return (
    <div className={style.myPost}>
      <textarea name="Message" rows="5"></textarea>
      <div className={style.buttons}>
        <button className={style.submit}>Submit</button>
        <button className={style.delete}>Delete</button>
      </div>
    </div>
  )
}

export default CreatePost;
