const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  navLinks: [
    { url: "/profile", name: "Profile" },
    { url: "/dialogs", name: "Messages" },
    { url: "/news", name: "News" },
    { url: "/music", name: "Music" },
    { url: "/settings", name: "Settings" },
  ],
  activeFriends: [
    {
      name: "Alex",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      name: "Pasha",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      name: "Pjotr",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
    {
      name: "Stas",
      avatar:
        "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",
    },
  ],
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default navbarReducer;
