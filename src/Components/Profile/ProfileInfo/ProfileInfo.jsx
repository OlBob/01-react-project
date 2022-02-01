import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  debugger;
  return (
    <div>
      <div className={s.profileBG}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={
            props.profile.photos.large ||
            "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
          }
          alt=""
        />
        <div className={s.aboutMe}>
          <h3>{props.profile.fullName}</h3>
          <p>
            I'm {props.profile.lookingForAJob ? "" : "not"} looking for a job
          </p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <br />
          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
