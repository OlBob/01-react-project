import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Pyotr"},
    {id: 3, name: "Max"},
    {id: 4, name: "Mustafa"},
    {id: 5, name: "Lily"},
    {id: 6, name: "Leo"},
  ],

  messages =[
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your day?"},
    {id: 3, message: "What's up?"},
    {id: 4, message: "I'm rich"},
    {id: 5, message: "Ololo"},
    {id: 6, message: "I'm new here!"},
  ];

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 15,},
  {id: 2, message: "It's my first post", likesCount: 20,}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
