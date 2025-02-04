import React from "react";
import checkImage from "../images/icon-success.svg";
import Button from "./Button";

export default function ThankYouPage({ toggleClick, email }) {
  console.log(email);
  return (
    // <div></div>
    <div className="successPage desktopSuccess ">
      <div className=" flexColumn ">
        <img src={checkImage} alt="success logo" className="successLogo" />
        <div className="successInfo flexColumn">
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <a href="./">{email}</a>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
      </div>
      <Button
        name="Dismiss message"
        className="successButton"
        toggleClick={toggleClick}
      />
    </div>
  );
}
