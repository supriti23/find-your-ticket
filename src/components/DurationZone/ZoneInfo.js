import React from "react";
import Button from "../button/Button";

const ZoneInfo = ({
  prevClick,
  handleChange,
  handleFocus,
  errorZone,
}) => {
  console.log(errorZone);
  return (
    <div className="all-elements container">
      <div className="row justify-content-center">
        <label>Please select the zone?</label>
      </div>
      <div className="row justify-content-center">
        <select
          className="form-control"
          name="zone"
          style={{ borderColor: errorZone ? "red" : null }}
          onChange={handleChange}
          onFocus={handleFocus}
        >
          <option value="1">Please Select...</option>
          <option value="AB">AB</option>
          <option value="ABC">ABC</option>
          <option value="BC">BC</option>
        </select>
      </div>
      {errorZone ? (
        <div className="row justify-content-center">
          <small style={{ color: "red" }}>Choose any one zone...</small>
        </div>
      ) : null}
      <div className="row justify-content-center" style={{ paddingTop: "5%" }}>
        <div className="col-md-8 justify-content-center">
          <label style={{ fontSize: "smaller" }}>
            If you don't know about the zones in Berlin, refer to this
            <span>
              &nbsp;
              <a
                href="https://sbahn.berlin/en/tickets/the-vbb-fare-explained/fare-zones/"
                target="_blank"
                rel="noreferrer"
              >
                link for more information.
              </a>
            </span>
          </label>
        </div>
      </div>
      <div className="row buttons">
        <div className="col-md-6 d-flex">
          <Button buttonName="Back" handleClick={prevClick} />
        </div>
        <div className="col-md-6 d-flex justify-content-end ">
          <button type="submit" className="btn btn-primary btn-lg">Show Tickets </button>
        </div>
      </div>
    </div>
  );
};
export default ZoneInfo;
