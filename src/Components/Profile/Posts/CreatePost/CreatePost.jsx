import React from "react";
import style from "./CreatePost.module.css";


const CreatePost = () => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;

    alert(text)
  }

  let removeContent = () => {
    let text = newPostElement.current.value;

    text  = '';
    return text;
  }

  return (
    <div className={style.myPost}>
      <textarea
          ref={newPostElement}
          name="Message"
          rows="5"></textarea>
      <div className={style.buttons}>
        <button
            className={style.submit}
            onClick={ addPost } >Add post</button>
        <button
            className={ style.delete }
            onClick={ removeContent } >Delete</button>
      </div>
    </div>
  )
}

export default CreatePost;

