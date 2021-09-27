import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavbarItem = (props) => {
  let {url, name} = props;

  return (
    <div className={style.item}>
      <NavLink to={url} activeClassName={style.activeLink}>{name}</NavLink>
    </div>
  )
}

const Navbar = (props) => {
  let {navLinks, activeFriends} = props;
  let navigation = navLinks.map( link =>  <NavbarItem url={link.url} name={link.name} />)

  return (
    <nav className={style.nav}>
      {navigation}
      <Friends activeFriends={activeFriends} />
    </nav>
  )
}

export default Navbar;
