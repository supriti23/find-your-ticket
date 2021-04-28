import React from "react";
import "./AddTravellers.scss";
import Button from "../button/Button";

const TravellerInfo = (props) => {
  const { traveller, handleAdd, handleMinus, handleChange, count } = props;

  function labelText() {
    if (traveller === "adults") {
      return traveller[0].toUpperCase() + traveller.slice(1);
    } else {
      return (
        <div>
          {traveller[0].toUpperCase() + traveller.slice(1)}
          <div className="small">(6 Yrs - 14 Yrs)</div>
        </div>
      );
    }
  }

  return (
    <div className="row justify-content-center align-items-center traveller-info">
      <div className="col-md-2">
        <label>{labelText()}</label>
      </div>
      <div className="col-md-6">
        <div className="input-group">
          <span className="input-group-prepend">
            <button
              name={traveller}
              className="btn traveller"
              onClick={handleMinus}
              type="button"
            >
              <i
                className="fa fa-minus"
                name={traveller}
                onClick={handleMinus}
              ></i>
            </button>
          </span>
          <input
            className="form-control"
            name={traveller}
            type="number"
            value={count}
            onChange={handleChange}
          />
          <span onClick={handleAdd} className="input-group-append">
            <button
              name={traveller}
              className="btn traveller"
              type="button"
              onClick={handleAdd}
            >
              <i
                className="fa fa-plus"
                name={traveller}
                onClick={handleAdd}
              ></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

//Component to add your co-travellers if your are travelling with children or others
const AddTraveller = (props) => {
  const { childCount, adultCount, nextClick, prevClick } = props;
  return (
    <div className="all-elements container">
      <div className="row justify-content-center">
        <div className="col-md-6 offset-md-2 justify-content-center">
          Add your co-travellers...
        </div>
      </div>
      <TravellerInfo {...props} traveller="adults" count={adultCount} />
      <TravellerInfo {...props} traveller="children" count={childCount} />
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

export default AddTraveller;
