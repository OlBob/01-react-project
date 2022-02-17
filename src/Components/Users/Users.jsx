import React from "react";
import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";
import User from "./User";

const Users = (props) => {

  // debugger;

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={c.usersPage}>
        {props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowInProgress={props.isFollowInProgress}
            toggleFollowInProgress={props.toggleFollowInProgress}
          />
        ))}
      </div>
      <div className={c.numberPages}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? c.selectedPage : undefined}
              onClick={(e) => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Users;
