import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
          "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
        },
      })
      .then((response) => {
        // debugger;
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={c.usersPage}>
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
