import React from "react";
import Button from "./Button";

export default function EmailForm({ toggleClick, email, setEmail }) {
  return (
    <div className="emailContainer">
      <div className="input-group">
        <label className="label">Email address</label>
        <input
          autoComplete="off"
          name="Email"
          id="Email"
          className="input"
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div></div>
      </div>
      <Button
        name="Subscribe to monthly newsletter"
        toggleClick={toggleClick}
      />
    </div>
  );
}
