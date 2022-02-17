import React from 'react';
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {followAPI} from "../../api/api";


const User = (props) => {
  return (
    <div key={props.user.id}>
            <span>
              <div className={c.userPhotoCont}>
                <NavLink to={"/profile/" + props.user.id}>
                  <img
                    src={props.user.photoUrl || userPhoto}
                    className={c.userPhoto}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {props.user.followed ? (
                  <button
                    disabled={props.isFollowInProgress}
                    onClick={() => {
                      props.toggleFollowInProgress(true);
                      followAPI.removeFollowParam(props.user.id)
                      .then((data) => {
                        if (data.resultCode === 0) props.unfollow(props.user.id);
                        props.toggleFollowInProgress(false);
                      })
                      .catch( err => console.log(err) );
                    }}>Unfollow</button>
                ) : (
                  <button
                    disabled={props.isFollowInProgress}
                    onClick={() => {
                      props.toggleFollowInProgress(true);
                      followAPI.setFollowParam(props.user.id)
                      .then((data) => {
                        if (data.resultCode === 0) props.follow(props.user.id);
                        props.toggleFollowInProgress(false);
                      })
                      .catch( err => console.log(err) );
                    }}>Follow</button>
                )}
              </div>
            </span>
      <span>
              <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
              </span>
              <span>
                <div>{"p.user.location.country"}</div>
                <div>{"p.user.location.city"}</div>
              </span>
            </span>
    </div>
  );
};

export default User;
