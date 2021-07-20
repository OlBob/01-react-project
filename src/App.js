// import logo from './logo.svg';
import React from 'react';
import './App.css';





const App = ()=> {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="logo" src="https://rayamarketing.com/uploads/blog/Animated-Logo-Design/Animated-Logo-Design.logo-social-sq_1612376226.png" alt=""/>
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <br/>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        </div>
        <div>
          ava+description
        </div>
        <div>My posts</div>
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
