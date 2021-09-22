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

  let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Pyotr"},
    {id: 3, name: "Max"},
    {id: 4, name: "Mustafa"},
    {id: 5, name: "Lily"},
    {id: 6, name: "Leo"},
  ],

  messages =[
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your day?"},
    {id: 3, message: "What's up?"},
    {id: 4, message: "I'm rich"},
    {id: 5, message: "Ololo"},
    {id: 6, message: "I'm new here!"},
  ];

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ),
      messagesElements = messages.map( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsElements
        }
      </div>
      <div className={s.messages}>
        {
          messagesElements
        }
      </div>
    </div>
  )
}

export default Dialogs;
