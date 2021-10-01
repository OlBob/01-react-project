const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
  _state: {
    navbar: {
      navLinks: [
        {url: "/profile", name: "Profile"},
        {url: "/dialogs", name: "Messages"},
        {url: "/news", name: "News"},
        {url: "/music", name: "Music"},
        {url: "/settings", name: "Settings"},
      ],
      activeFriends: [
        {
          name: "Alex",
          avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          name: "Pasha",
          avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          name: "Pjotr",
          avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          name: "Stas",
          avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
      ],
    },
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15,},
        {id: 2, message: "It's my first post", likesCount: 20,},
        {id: 3, message: "It's my second post", likesCount: 25,},
        {id: 4, message: "It's my third post", likesCount: 15,},
        {id: 5, message: "It's my forth post", likesCount: 55,},
      ],
      newPostText: "Input Your text",
    },
    dialogsPage: {
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your day?"},
        {id: 3, message: "What's up?"},
        {id: 4, message: "I'm rich"},
        {id: 5, message: "Ololo"},
        {id: 6, message: "I'm new here!"},
      ],
      newMessageBody: "Write your message",
      dialogs: [
        {id: 1, name: "Alex", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
        {id: 2, name: "Pyotr", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
        {id: 3, name: "Max", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
        {id: 4, name: "Mustafa", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
        {id: 5, name: "Lily", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
        {id: 6, name: "Leo", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      ],
    },
  },
  _callSubscriber() {
    console.log("State has changed");
  },      //_rerenderEntireTree

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;            // Pattern observer
  },

/*  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state. profilePage.posts.push(newPost);
    this._state.profilePage.newPostText ='';
    this._callSubscriber(this._state);
  },*/
/*  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageBody = newText;

    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage ={
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageBody,
    }

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageBody = "";

    this._callSubscriber(this._state);

  },*/

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state. profilePage.posts.push(newPost);
      this._state.profilePage.newPostText ='';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage ={
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageBody,
      }

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageBody = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.newText;

      this._callSubscriber(this._state);
    }
  }

}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextChangeCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})


export default store;
window.store = store;
