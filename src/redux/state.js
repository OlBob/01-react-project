let state = {
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
    dialogs: [
      {id: 1, name: "Alex", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      {id: 2, name: "Pyotr", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      {id: 3, name: "Max", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      {id: 4, name: "Mustafa", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      {id: 5, name: "Lily", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
      {id: 6, name: "Leo", avatar: "https://i.pinimg.com/474x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg",},
    ],
  },
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 6,
    message: postMessage,
    likesCount: 0,
  };

  state. profilePage.posts.push(newPost)
}

export default state;
