import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./HomePage";
import renderer from "react-test-renderer";

describe("Homepage Testing", () => {
    const component = renderer.create(<HomePage />).toJSON();
  test("Renders without crashing and displays a button with text", () => {
    expect(component).toMatchSnapshot();   
  });

  test("onclick event testing of Find Tickets Button", () => {
    render(<HomePage />)
    const button = screen.getByText("Find Tickets");
    fireEvent.click(button);
  });
});
