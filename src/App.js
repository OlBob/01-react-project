// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";



const App = (props) => {
  let {
    profilePage,
    dialogsPage,
    navbar: {navLinks, activeFriends},
  } = props.state;

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar navLinks={navLinks} activeFriends={activeFriends} />
        <div className="app-wrapper-content">
          <Route
              path="/profile"
              render={ () => <Profile
                  profilePage={profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText} />} />
          <Route
              path="/dialogs"
              render={ () => <Dialogs
                  dialogsPage={dialogsPage}
                  updateNewMessageText={props.updateNewMessageText}
                  addMessage={props.addMessage} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
}

export default App;
