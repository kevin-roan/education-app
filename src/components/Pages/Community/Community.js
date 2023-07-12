import React from "react";
import tc from "../../../assets/img/tc.png";
import "./Community.css";

function Community() {
  const handleClick = () => {
    window.open("https://chat.whatsapp.com/dkjdkdjdkjludan", "_blank");
  };
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="" />
        </div>
        <div className="start-content">
          <h2 className="section-title">Join Our Free Tech Community</h2>
          <p>
            Unlock the power of knowledge and innovation by joining our vibrant
            and free Whatsapp tech Community.
          </p>
          <button className="register-btn" onClick={handleClick}>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
