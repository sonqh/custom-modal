import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../components/Modal";

describe("Modal", () => {
  test("renders Modal component and closes on button click", () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Modal Content
      </Modal>
    );

    // Check that the modal title is in the document
    const modalTitle = screen.getByText(/Test Modal/i);
    expect(modalTitle).toBeInTheDocument();

    // Check that the modal content is in the document
    const modalContent = screen.getByText(/Modal Content/i);
    expect(modalContent).toBeInTheDocument();

    // Simulate a click on the close button
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    // handleClose should have been called once
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
