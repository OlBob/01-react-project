import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Alex
        </div>
        <div className={s.dialog}>
          Pyotr
        </div>
        <div className={s.dialog}>
          Max
        </div>
        <div className={s.dialog}>
          Mustafa
        </div>
        <div className={s.dialog}>
          Lily
        </div>
        <div className={s.dialog}>
          Leo
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
