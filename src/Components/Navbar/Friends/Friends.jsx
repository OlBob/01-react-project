import React from "react";
import c from "./Friends.module.css";

const Friend = (props) => {
  return (
    <div className={c.person}>
      <img className={c.personImg} src={props.avatar} alt="" />
      <p className={c.personName}>{props.name}</p>
    </div>
  );
};

const Friends = (props) => {
  let friendsList = props.activeFriends
    .filter((el, i) => i < 3)
    .map((f) => <Friend key={f.id} name={f.name} avatar={f.avatar} />);

  return (
    <div className={c.friends}>
      <h1>Friends</h1>
      <div className={c.friendsList}>{friendsList}</div>
    </div>
  );
};

export default Friends;
