import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./HomePage";
import renderer from "react-test-renderer";

describe("Homepage Testing", () => {
    const component = renderer.create(<HomePage />).toJSON();
  test("Renders without crashing and displays a button with text", () => {
    expect(component).toMatchInlineSnapshot(`
      <div
        className="container-fluid home"
      >
        <div
          className="heading row justify-content-center"
        >
          <p>
            Welcome to Berlin
          </p>
        </div>
        <div
          className="row justify-content-center"
        >
          <button
            className="btn btn-primary btn-lg"
            onClick={[Function]}
            style={
              Object {
                "backgroundColor": undefined,
              }
            }
            type="button"
          >
            Find Tickets
          </button>
        </div>
      </div>
    `);
  });

  test("onclick event testing of Find Tickets Button", () => {
    render(<HomePage />)
    const button = screen.getByText("Find Tickets");
    fireEvent.click(button);
  });
});
