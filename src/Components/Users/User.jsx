import React from 'react';
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {followAPI} from "../../api/api";


const User = (props) => {

  // debugger;

  const FOLLOW = "Follow", UNFOLLOW = "Unfollow";

  function setFollowButton(t) {
    let func;
    // debugger;
    props.toggleFollowInProgress(true);

    switch(t) {
      case UNFOLLOW:
        func = followAPI.removeFollowParam(props.user.id)
          .then((data) => data.resultCode === 0 && props.unfollow(props.user.id))
        break;
      case FOLLOW:
        func = followAPI.setFollowParam(props.user.id)
          .then((data) => data.resultCode === 0 && props.follow(props.user.id))
        break;
      default:
        break;
    }

    return func ? func.then(() => props.toggleFollowInProgress(false)).catch( err => console.log(err)) : null;
  }

  return (
    <div key={props.user.id} className={c.userCont}>
      <div className={c.userCont_Data}>
        <div className={c.userPhotoCont}>
          <NavLink to={"/profile/" + props.user.id}>
            <img
              src={props.user.photoUrl || userPhoto}
              className={c.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div className={c.userButtonCont}>
          {props.user.followed
            ? <button
                disabled={ props.isFollowInProgress }
                onClick={ (e) => setFollowButton(e.currentTarget.innerText) }
                >{UNFOLLOW}
              </button>
            : <button
                disabled={ props.isFollowInProgress }
                onClick={ (e) => setFollowButton(e.currentTarget.innerText) }
                >{FOLLOW}
              </button>
          }
        </div>
      </div>
      <div className={c.userCont_additionalData}>
        <div>
          <h3>{props.user.name}</h3>
          <h5>{props.user.status}</h5>
        </div>
        <div>
          {props.user.location
            ? <div>{"p.user.location.country"}</div>
            : <div>I'm a citizen of the world!</div>
          }
        </div>
      </div>
    </div>
  );
};

export default User;
