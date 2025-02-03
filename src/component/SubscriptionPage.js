import React from "react";
import mobileImage from "../images/illustration-sign-up-mobile.svg";
import desktopImage from "../images/illustration-sign-up-desktop.svg";
import checkLogo from "../images/icon-list.svg";
import EmailForm from "./EmailForm";

export default function SubscriptionPage({ toggleClick, email, setEmail }) {
  return (
    <div className="view">
      <div className="image">
        <img
          src={mobileImage}
          alt="illustration view"
          className="mobileImage"
        />

        <img
          src={desktopImage}
          alt="illustration view"
          className="desktopImage"
        />
      </div>

      <div className="mobileContainer">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="list">
          <ul className="custom-list">
            <li>
              <img src={checkLogo} alt="checklogo" className="icon" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <img src={checkLogo} alt="checklogo" className="icon" />
              <p>Measuring to ensure updates are a success </p>
            </li>
            <li>
              <img src={checkLogo} alt="checklogo" className="icon" />
              <p> And much more!</p>
            </li>
          </ul>
        </div>
        <EmailForm
          toggleClick={toggleClick}
          email={email}
          setEmail={setEmail}
        />
      </div>
    </div>
  );
}
