import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let {dialogs, messages} = props;

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);

  let messagesElements = messages.map( m => <Message message={m.message} /> );

  let newText = React.createRef();

  let sendMessage = () => {
    let text = newText.current.value;

    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div>
          <textarea name="addMessage" cols="45" rows="5" ref={ newText }></textarea>
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
