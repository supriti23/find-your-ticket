import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ZoneInfo from "./ZoneInfo";

describe("Testing the component where the zone can be selected ", () => {  
  test("Renders without crashing and event is triggered for Back and ShowTicket(submit) button ", () => {
    const prevClick = jest.fn();
    render(<ZoneInfo  prevClick={prevClick} />)

    fireEvent.click(screen.getByText("Back"));
    expect(prevClick).toHaveBeenCalledTimes(1);
    
    fireEvent.submit(screen.getByText("Show Tickets"))

  });

});