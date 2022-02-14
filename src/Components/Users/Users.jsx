import React from "react";
import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const credentials = {
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
      "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
    },
  }

  return (
    <>
      <div className={c.usersPage}>
        {props.users.map((u) => (
          <div key={u.id}>
          <span>
            <div className={c.userPhotoCont}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photoUrl || userPhoto}
                  className={c.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, credentials)
                  .then((response) => {
                    return response.data.resultCode === 0
                            ? props.unfollow(u.id)
                            : alert('Something went wrong');
                  });
                }}>Unfollow</button>
              ) : (
                <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, credentials)
                  .then((response) => {
                    return response.data.resultCode === 0
                            ? props.follow(u.id)
                            : alert('Something went wrong');
                  });
                }}>Follow</button>
              )}
            </div>
          </span>
            <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
          </div>
        ))}
      </div>
      <div className={c.numberPages}>
        {pages.map((p) => {
          return (
            <span
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
