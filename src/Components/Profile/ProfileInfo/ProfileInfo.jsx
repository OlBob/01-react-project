import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileBG}>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
          alt=""/>
        <div className={s.aboutMe}>
          <p>My name is Loki</p>
          <p>I live in Asgard</p>
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo;
