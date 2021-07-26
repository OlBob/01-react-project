import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">
            Alex
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">
            Pyotr
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">
            Max
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">
            Mustafa
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">
            Lily
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">
            Leo
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          <p>Hi</p>
        </div>
        <div className={s.message}>
          <p>How is your day?</p>
        </div>
        <div className={s.message}>
          <p>What's up?</p>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
