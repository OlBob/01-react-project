import React from "react";
import c from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
        followed: true,
        fullName: "Hi, how are you?",
        status: "Looking for a job",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
        followed: false,
        fullName: "It's my first post",
        status: "Chilling",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
        followed: true,
        fullName: "It's my second post",
        status: "Traveling",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div className={c.usersPage}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={c.userPhotoCont}>
              <img src={u.photoUrl} className={c.userPhoto} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
