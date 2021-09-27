import React from "react";
import style from "./CreatePost.module.css";


const CreatePost = (props) => {

  let newPostElement = React.createRef();

  let changeContent = () => {
    let text = newPostElement.current.value;
    newPostElement.current.value = props.changeValue(text);
  }

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={style.myPost}>
      <textarea
          // onChange={() => alert("event")}
          onChange={changeContent}
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
            // onClick={ removeContent }
        >Delete
        </button>
      </div>
    </div>
  )
}

export default CreatePost;

