const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your day?" },
    { id: 3, message: "What's up?" },
    { id: 4, message: "I'm rich" },
    { id: 5, message: "Ololo" },
    { id: 6, message: "I'm new here!" },
  ],
  newMessageBody: "Write your message",
  dialogs: [
    {
      id: 1,
      name: "Alex",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      id: 2,
      name: "Pyotr",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      id: 3,
      name: "Max",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      id: 4,
      name: "Mustafa",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      id: 5,
      name: "Lily",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      id: 6,
      name: "Leo",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newText: text,
});

export default dialogsReducer;
