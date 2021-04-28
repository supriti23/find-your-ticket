import React, { useState } from "react";
import "./HomePage.scss";
import Button from "../button/Button";
import MainForm from "../mainform/MainForm";
const HomePage = () => {
  const [find, setFind] = useState(false);

  function nextClick() {
    setFind(true);
  }
  console.log(find)
  return (
    <>
      {find ? (
        <MainForm />
      ) : (
        <div className="container-fluid home">
          <div className="heading row justify-content-center">
            <p>Welcome to Berlin</p>
          </div>
          <div className="row justify-content-center">
            <Button buttonName="Find Tickets" handleClick={ () => nextClick()}></Button>
          </div>
        </div>
      )}
    </>
  );
};
export default HomePage;
