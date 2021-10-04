import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>
        <div className={c.messages_items}>{messagesElements}</div>
        <div>
          <textarea
            name="addMessage"
            cols="45"
            rows="5"
            value={props.dialogsPage.newMessageBody}
            placeholder="Enter your message"
            onChange={onNewMessageChange}
          />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
