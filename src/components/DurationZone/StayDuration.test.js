import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StayDuration from "./StayDuration";

afterAll(cleanup);
describe("Testing the component for entering stay duration ", () => {
    
  test("Renders without crashing and click event is triggered for Back and Continue Button ", () => {
    const nextClick = jest.fn();
    const prevClick = jest.fn();

    render(<StayDuration nextClick={nextClick} prevClick={prevClick}/>)
    
    fireEvent.click(screen.getByText("Continue"));
    expect(nextClick).toHaveBeenCalledTimes(1);
    
    fireEvent.click(screen.getByText("Back"));
    expect(prevClick).toHaveBeenCalledTimes(1);
  });

});