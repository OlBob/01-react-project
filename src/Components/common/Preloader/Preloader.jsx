import React from "react";
import preloader from "../../../assets/images/load.svg"
const Preloader = (props) => {
    return (
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;