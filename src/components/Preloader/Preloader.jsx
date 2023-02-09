import React from "react";
import "./Preloader.scss";
import preloader from "../../images/preloader.svg";

const Preloader = (props) => {

    return (
        <div className="preloader">
            <img src={preloader} alt="Preloader"/>
        </div>
    )

}
export default Preloader;