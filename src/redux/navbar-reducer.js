const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default navbarReducer;
