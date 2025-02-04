import React from "react";

export default function EmailForm({
  email,
  setEmail,
  isError,
  checkValidEmail,
}) {
  console.log(email);
  return (
    <div className="emailContainer">
      <div className="input-group">
        <div className="flexRow">
          <label className="label">Email address</label>
          {isError ? <p className="error">Valid email required</p> : <p></p>}
        </div>

        <input
          autoComplete="off"
          name="Email"
          id="Email"
          className={`input ${isError ? "errorInput" : ""} `}
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button className="button" onClick={() => checkValidEmail()}>
        Subscribe to monthly newsletter
      </button>
    </div>
  );
}
