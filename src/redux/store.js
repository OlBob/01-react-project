import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    navbar: {
      navLinks: [
        { id: 1, url: "/profile", name: "Profile" },
        { id: 2, url: "/dialogs", name: "Messages" },
        { id: 3, url: "/news", name: "News" },
        { id: 4, url: "/music", name: "Music" },
        { id: 5, url: "/settings", name: "Settings" },
      ],
      activeFriends: [
        {
          id: 1,
          name: "Alex",
          avatar:
            "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          id: 2,
          name: "Pasha",
          avatar:
            "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          id: 3,
          name: "Pjotr",
          avatar:
            "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
        {
          id: 4,
          name: "Stas",
          avatar:
            "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
        },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
        { id: 3, message: "It's my second post", likesCount: 25 },
        { id: 4, message: "It's my third post", likesCount: 15 },
        { id: 5, message: "It's my forth post", likesCount: 55 },
      ],
      newPostText: "Input Your text",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("State has changed");
  }, //_rerenderEntireTree

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // Pattern observer
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
