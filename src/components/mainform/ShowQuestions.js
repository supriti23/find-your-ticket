import PersonalInfo from "../personalinfo/PersonalInfo";
import AddTraveller from "../cotravellers/AddTravellers";
import StayDuration from "../DurationZone/StayDuration";
import ZoneInfo from "../DurationZone/ZoneInfo";
export const showDifferentComponent = (
    step,personalInfo,changeValue,
    handleContinue,errorName, errorAge, errorEmail,errorDays, errorZone,
    showTicket,
    handleFocus,
    handleClickAdd,
    handleClickMinus,
    handlePrevious,

) => {
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
          nextClick={() => showTicket()}
          errorZone={errorZone}
        />
      );
      break;
    // case 5:
    //   component = (
    //     <SuggestedTicket prevClick={() => handlePrevious()} tickets={tickets} />
    //   );
    //   break;
    default:
      break;
  }
};
