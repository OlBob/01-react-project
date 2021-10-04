import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let newMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  };

  let sendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return (
    <Dialogs
      updateNewMessage={newMessageChange}
      sendMessage={sendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
