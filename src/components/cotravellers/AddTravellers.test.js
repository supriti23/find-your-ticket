import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTraveller from "./AddTravellers";

describe("Testing the component to add co-travellers", () => {
    
  test("Renders without crashing and click event is triggered for Back and Continue Button", () => {
    const nextClick = jest.fn();
    const prevClick = jest.fn();

    render(<AddTraveller  nextClick={nextClick} prevClick={prevClick} />)
    
    fireEvent.click(screen.getByText("Continue"));
    expect(nextClick).toHaveBeenCalledTimes(1);
    
    fireEvent.click(screen.getByText("Back"));
    expect(prevClick).toHaveBeenCalledTimes(1);
  });

});