import React from "react";
import "./SuggestedTicket.scss";

const SuggestedTicket = ({ prevClick, givenInfo, tickets }) => {
  console.log(tickets);
  return (
    <>
      <div className="container ticket-box">
        <div className="row  justify-content-center title">
          Suggested Tickets based on your journey details.
        </div>
        <div className="row justify-content-center ">
          {tickets.map((val, id) => (
            <span key={id} className="badge badge-pill badge-info">
              {val}
            </span>
          ))}
        </div>
      </div>
      <div className="container answer-box">
        <div className="row justify-content-center">
          <div className="col-md-4 justify-content-center label-text text-left">
            <span>Name</span>
          </div>
          <div className=" col-md-6 justify-content-center answers">
            {givenInfo.name}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left ">Age</div>
          <div className=" col-md-6 justify-content-center answers">
            {givenInfo.age}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left">Email</div>
          <div className=" col-md-6 answers">{givenInfo.email}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left">
            Adult <small>(Co-Travellers)</small>
          </div>
          <div className=" col-md-6 answers">{givenInfo.adults < 0 ? 0 : givenInfo.adults}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left">
            Children<small> (6 - 14 Yrs)</small>
          </div>
          <div className=" col-md-6 answers">{givenInfo.children < 0 ? 0 : givenInfo.children}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left">Stay Duration </div>
          <div className=" col-md-6 answers">{givenInfo.days} Days</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 label-text text-left">Berlin Zone</div>
          <div className=" col-md-6 answers">{givenInfo.zone}</div>
        </div>
      </div>
    </>
  );
};
export default SuggestedTicket;
