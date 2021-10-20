import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          baseURL: "https://social-network.samuraijs.com/api/1.0/",
          headers: {
            "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
          },
        }
      )
      .then((response) => {
        // debugger;
        window.response = response;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          baseURL: "https://social-network.samuraijs.com/api/1.0/",
          headers: {
            "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
          },
        }
      )
      .then((response) => {
        // debugger;
        window.response = response;
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={c.usersPage}>
        <div className={c.numberPages}>
          {pages.map((p) => {
            return (
              <span
                className={
                  this.props.currentPage === p ? c.selectedPage : undefined
                }
                onClick={(e) => this.onPageChanged(p)}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={c.userPhotoCont}>
                <img
                  src={u.photoUrl || userPhoto}
                  className={c.userPhoto}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
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
    );
  }
}

export default Users;
