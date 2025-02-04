import React from "react";

export default function EmailForm({
  email,
  setEmail,
  isError,
  checkValidEmail,
}) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // console.log(!re.test(email));
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
        <div></div>
      </div>
      <button className="button" onClick={() => checkValidEmail()}>
        Subscribe to monthly newsletter
      </button>
    </div>
  );
}
