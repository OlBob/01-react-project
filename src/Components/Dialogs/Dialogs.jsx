import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

  let {dialogs, messages} = props.dialogsPage;

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
  let messagesElements = messages.map( m => <Message message={m.message} /> );

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(text));
  }

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div className={s.messages_items}>
          { messagesElements }
        </div>
        <div>
          <textarea
              name="addMessage"
              cols="45"
              rows="5"
              value={props.dialogsPage.newMessageBody}
              placeholder="Enter your message"
              onChange={ onNewMessageChange }
          />
          <button onClick={ onSendMessageClick }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
