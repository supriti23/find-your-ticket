import React from "react";
import Button from "../button/Button";
import "./PersonalInfo.scss";

const PersonalInfo = ({
  handleChange,
  handleFocus,
  nextClick,
  name,
  age,
  email,
  errorName,
  errorAge,
  errorEmail,
}) => {
  return (
    <div className="all-elements container">
      <div className="form-group row justify-content-center">
        <label className="form-label">
          Full Name
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter your name..."
            onChange={handleChange}
            onFocus={handleFocus}
            value={name}
            style={{ borderColor: errorName ? "red" : null }}
          />
          {errorName ? (
            <div>
              <small className="show-error">Please fill out this field.</small>
            </div>
          ) : null}
        </label>
      </div>
      <div className="form-group row justify-content-center">
        <label className="form-label">
          Age
          <input
            className="form-control"
            name="age"
            type="number"
            placeholder="Enter your age.."
            onChange={handleChange}
            onFocus={handleFocus}
            value={age}
            min="1"
            style={{ borderColor: errorAge ? "red" : null }}
          />
          {errorAge ? (
            <div>
              <small className="show-error">Please enter valid age</small>
            </div>
          ) : null}
        </label>
      </div>
      <div className="form-group row justify-content-center">
        <label className="form-label">
          Email
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="Enter your email ID..."
            onFocus={handleFocus}
            onChange={handleChange}
            value={email}
            style={{ borderColor: errorEmail ? "red" : null }}
          />
          {errorEmail ? (
            <div>
              <small className="show-error">Please enter valid Email ID</small>
            </div>
          ) : null}
        </label>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="row justify-content-center">
        <Button buttonName="Continue" handleClick={nextClick} />
      </div>
    </div>
  );
};
export default PersonalInfo;
