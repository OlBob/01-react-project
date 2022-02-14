import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://rayamarketing.com/uploads/blog/Animated-Logo-Design/Animated-Logo-Design.logo-social-sq_1612376226.png"
        alt=""
      />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
