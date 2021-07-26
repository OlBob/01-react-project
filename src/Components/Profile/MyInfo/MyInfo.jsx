import React from "react";
import style from "./MyInfo.module.css";

const MyInfo = () => {
  return (
    <div className={style.myInfo}>
      <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" alt=""/>
        <div className={style.aboutMe}>
          <p>My name is Loki</p>
          <p>I live in Asgard</p>
        </div>
    </div>
  )
}

export default MyInfo;
