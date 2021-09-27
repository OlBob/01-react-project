import React from "react";
import style from "./CreatePost.module.css";


const CreatePost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let removeContent = () => {

  }

  return (
    <div className={style.myPost}>
      <textarea
          ref={newPostElement}
          name="Message"
          rows="5">
      </textarea>
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

