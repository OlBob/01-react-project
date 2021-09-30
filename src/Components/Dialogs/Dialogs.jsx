import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/state";


const Dialogs = (props) => {

  let {dialogs, messages} = props.dialogsPage;

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
  let messagesElements = messages.map( m => <Message message={m.message} /> );
  let newText = React.createRef();

  let onMessageUpdate = () => {
    let text = newText.current.value;
    props.dispatch(updateNewMessageTextChangeActionCreator(text));
  }

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator())
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
              ref={ newText }
              value={props.dialogsPage.newMessageText}
              onChange={ onMessageUpdate }
          />
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
