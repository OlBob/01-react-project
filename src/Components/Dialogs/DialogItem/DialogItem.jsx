import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img src={props.avatar} alt=""/>
        <p>{props.name}</p>
      </NavLink>
    </div>
  )
}

export default DialogItem;
