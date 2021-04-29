import React, { useState } from "react";
import "./Form.scss";
import PersonalInfo from "../personalinfo/PersonalInfo";
import AddTraveller from "../cotravellers/AddTravellers";
import StayDuration from "../DurationZone/StayDuration";
import ZoneInfo from "../DurationZone/ZoneInfo";
import SuggestedTicket from "../TicketSuggestion/SuggestedTicket";
import getTicket from "./GetTicket";

let personalInfoObj = {
  name: "",
  age: "",
  email: "",
  children: 0,
  adults: 0,
  days: "",
  zone: "",
};
//Main Form Component renders different components depending on the form step(initial step is 1)
const MainForm = () => {
  const [personalInfo, setpersonalInfo] = useState(personalInfoObj);
  const [step, setStep] = useState(1);
  const [tickets, setTickets] = useState([]);
  const [errorName, setErrorName] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const [errorDays, setErrorDays] = useState(false);
  const [errorZone, setErrorZone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [submit, setSubmit] = useState(false);


  function changeValue(e) {
    e.preventDefault();
    setpersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }

  function handleFocus() {
    setErrorName(false);
    setErrorAge(false);
    setErrorDays(false);
    setErrorZone(false);
    setErrorEmail(false);
  }
// handler to to add children and adults on pressing the Add button in the AddTraveller Component
  function handleClickAdd(e) {
    if (e.target.name !== undefined || null) {
      let updatedValue = parseInt(personalInfo[e.target.name]) + 1;
      setpersonalInfo({ ...personalInfo, [e.target.name]: updatedValue });
    } else {
      let updatedValue = parseInt(personalInfo[e.target.parentNode.name]) + 1;
      setpersonalInfo({
        ...personalInfo,
        [e.target.parentNode.name]: updatedValue,
      });
    }
  }

  // handler to to reduce children and adults on pressing the Minus button in the AddTraveller Component
  function handleClickMinus(e) {
    if (e.target.name !== undefined || null) {
      let updatedValue = parseInt(personalInfo[e.target.name]) - 1;
      if (updatedValue >= 0) {
        setpersonalInfo({ ...personalInfo, [e.target.name]: updatedValue });
      }
    } else {
      let updatedValue = parseInt(personalInfo[e.target.parentNode.name]) - 1;
      if (updatedValue >= 0) {
        setpersonalInfo({
          ...personalInfo,
          [e.target.parentNode.name]: updatedValue,
        });
      }
    }
  }

  function handlePrevious() {
    setStep((prev) => prev - 1);
  }
 /*validations of different form fields and if any error is encountered the error state for the 
 relevant sate is changed to true and also increases the step value when continue is clicked*/
  function handleContinue(event) {
    if (step === 1) {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!personalInfo.name) {
        setErrorName(true);
      } else if (!personalInfo.age) {
        setErrorAge(true);
      } else if (personalInfo.age > 150 || personalInfo.age <= 0) {
        setErrorAge(true);
      } else if (personalInfo.email && !pattern.test(personalInfo.email)) {
        setErrorEmail(true);
      } else {
        setStep((prev) => prev + 1);
      }
    } else if (step === 2) {
      setStep((prev) => prev + 1);
    } else if (step === 3) {
      if (!personalInfo.days) {
        setErrorDays(true);
      } else {
        setStep((prev) => prev + 1);
      }
    } else if (step === 4) {
      let zoneArr = ["AB", "BC", "ABC"];
      if (zoneArr.indexOf(personalInfo.zone) === -1) {
        setErrorZone(true);
      } else {
        setStep((prev) => prev + 1);
      }
    }
  }

//switch case for rendering different components based on the step value
  let component = null;
  switch (step) {
    case 1:
      component = (
        <PersonalInfo
          handleChange={(e) => changeValue(e)}
          nextClick={(e) => handleContinue(e)}
          handleFocus={(e) => handleFocus(e)}
          name={personalInfo.name}
          age={personalInfo.age}
          email={personalInfo.email}
          errorName={errorName}
          errorAge={errorAge}
          errorEmail={errorEmail}
        />
      );
      break;
    case 2:
      component = (
        <AddTraveller
          handleChange={(e) => changeValue(e)}
          adultCount={personalInfo.adults}
          handleAdd={(e) => handleClickAdd(e)}
          childCount={personalInfo.children}
          handleMinus={(e) => handleClickMinus(e)}
          prevClick={() => handlePrevious()}
          nextClick={() => handleContinue()}
        />
      );
      break;
    case 3:
      component = (
        <StayDuration
          days={personalInfo.days}
          handleChange={(e) => changeValue(e)}
          handleFocus={(e) => handleFocus(e)}
          prevClick={() => handlePrevious()}
          nextClick={() => handleContinue()}
          errorDays={errorDays}
        />
      );
      break;
    case 4:
      component = (
        <ZoneInfo
          handleChange={(e) => changeValue(e)}
          handleFocus={(e) => handleFocus(e)}
          prevClick={() => handlePrevious()}
          nextClick={() => handleSubmit()}
          errorZone={errorZone}
        />
      );
      break;
    default:
      break;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let suggestedTickets = getTicket(personalInfo);
    //function to fetch suitable tickets according the details provided
    setTickets(suggestedTickets);
    setSubmit(true);
  }

  return (
    <div className="background container-fluid">
      {submit ? (
        <SuggestedTicket prevClick={() => handlePrevious()} tickets={tickets} givenInfo={personalInfo}/>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row justify-content-center align-items-center form-box">
            {component}
          </div>
        </form>
      )}
    </div>
  );
};
export default MainForm;
