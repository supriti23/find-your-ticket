
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainForm from './MainForm';

describe("Testing the Main component that renders different other components", () => {
    
  test("Renders without crashing ", () => {
   //When the main Component renders for the first time it should have name, age, Email Fields
   render(<MainForm />);
   expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
   expect(screen.getByText("Age")).toBeInTheDocument();
   expect(screen.getByText("Email")).toBeInTheDocument();
   
   //At first render there should be no Back Button, only Continue Button should be there
   const button = screen.getByRole("button");
   expect(button).toHaveTextContent("Continue");
   expect(button).not.toHaveTextContent("Back");
   
   //onclick event of Continue Button is fired or not
   fireEvent.click(button);
   
  });

});






