import React from "react";
import style from "./CreatePost.module.css";
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../../redux/state";




const CreatePost = (props) => {

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;

    let action = updateNewPostTextChangeActionCreator(text);
    props.dispatch(action);
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <div className={style.myPost}>
      <textarea
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="Input your text"
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

