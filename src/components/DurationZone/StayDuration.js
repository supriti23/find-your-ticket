import React from "react";
import Button from "../button/Button";

const StayDuration = ({
  days,
  handleChange,
  handleFocus,
  prevClick,
  nextClick,
  errorDays,
}) => {
  return (
    <div className="all-elements container">
      <div className="row justify-content-center">
        <label htmlFor="days">What is your duration of stay in the city?</label>
      </div>
      <div className="row justify-content-center">
        <input
          className="form-control"
          id="days"
          name="days"
          type="number"
          value={days}
          onFocus={handleFocus}
          placeholder="Enter number of days..."
          onChange={handleChange}
          min="1"
          style={{ borderColor: errorDays ? "red" : null }}
        />
      </div>
      {errorDays ? (
        <div className="row justify-content-center">
          <small style={{ color: "red" }}>
            Please enter you duration of stay in days
          </small>
        </div>
      ) : null}
      <div className="row buttons">
        <div className="col-md-6 d-flex">
          <Button buttonName="Back" handleClick={prevClick} />
        </div>
        <div className="col-md-6 d-flex justify-content-end ">
          <Button buttonName="Continue" handleClick={nextClick} />
        </div>
      </div>
    </div>
  );
};
export default StayDuration;
