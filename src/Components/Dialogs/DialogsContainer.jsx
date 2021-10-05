import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let newMessageChange = (text) => {
          store.dispatch(updateNewMessageBodyCreator(text));
        };

        let sendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        return (
          <Dialogs
            updateNewMessage={newMessageChange}
            sendMessage={sendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
