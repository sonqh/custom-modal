import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component and opens modal on button click", () => {
    render(<App />);

    // Check that the button is in the document
    const openModalButton = screen.getByText(/Open Modal/i);
    expect(openModalButton).toBeInTheDocument();

    // Click the button to open the modal
    fireEvent.click(openModalButton);

    // Check that the modal is in the document
    const modalContent = screen.getByText(
      /This is the content of the modal with custom styles and animation./i
    );
    expect(modalContent).toBeInTheDocument();
  });
});
