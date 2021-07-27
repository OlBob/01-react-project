import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";


const Message = (props) => {
  return (
    <div className={s.message}>
      <p>{props.message}</p>
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={"Alex"} id={"1"} />
        <DialogItem name={"Pyotr"} id={"2"} />
        <DialogItem name={"Max"} id={"3"} />
        <DialogItem name={"Mustafa"} id={"4"} />
        <DialogItem name={"Lily"} id={"5"} />
        <DialogItem name={"Leo"} id={"6"} />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your day?" />
        <Message message="What's up?" />
        <Message message="I'm rich" />
      </div>
    </div>
  )
}

export default Dialogs;
