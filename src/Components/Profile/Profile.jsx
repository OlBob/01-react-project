import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import MyInfo from "./MyInfo/MyInfo";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
      </div>
      <MyInfo />
      <Posts />
    </div>
  )
}

export default Profile;
