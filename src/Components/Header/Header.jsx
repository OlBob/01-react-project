import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://rayamarketing.com/uploads/blog/Animated-Logo-Design/Animated-Logo-Design.logo-social-sq_1612376226.png" alt=""/>
    </header>
  )
}

export default Header;
