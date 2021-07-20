import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
      </div>
      <div>
        ava+description
      </div>
      <div>My posts</div>
      <div>New post</div>
      <div className={style.posts}>
        <div className={style.item}>Post 1</div>
        <div className={style.item}>Post 2</div>
      </div>
    </div>
  )
}

export default Profile;
