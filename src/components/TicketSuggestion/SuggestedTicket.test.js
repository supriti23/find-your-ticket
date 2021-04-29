import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SuggestedTicket from "./SuggestedTicket";

describe("Testing the component where user can see the tickets suggested", () => {  
  test("Renders without crashing", () => {
    const userValues = {
        name: "Linda",
        age: "25",
        email: "linda@abc.com",
        children: 1,
        adults: 4,
        days: "1",
        zone: "ABC"
    }
    const tickets=["Day Ticket ABC", "Reduced Fare Day Ticket(Age 6 - 14)"]
    render(<SuggestedTicket givenInfo={userValues} tickets={tickets}/>)
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(userValues.name).toBeInTheDocument;
    expect(userValues.age).toBeInTheDocument;
    expect(userValues.email).toBeInTheDocument;
    expect(userValues.children).toBeInTheDocument;
    expect(userValues.adults).toBeInTheDocument;
    expect(userValues.days).toBeInTheDocument;
    expect(userValues.zone).toBeInTheDocument;
    expect(tickets[0]).toBeInTheDocument;
    expect(tickets[1]).toBeInTheDocument;
  });

});