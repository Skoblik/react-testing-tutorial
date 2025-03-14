import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application component test", () => {
  test("renders the application form heading", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", {
      name: /job application form/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders the Section heading", () => {
    render(<Application />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /section 1/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders image", () => {
    render(<Application />);

    const image = screen.getByAltText("a mountain view");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://www.w3schools.com/images/picture.jpg"
    );
  });

  test("renders the custom HTML element", () => {
    render(<Application />);

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
    expect(customElement).toHaveTextContent(/^Custom HTML element$/);
  });

  test("renders the name input field", () => {
    render(<Application />);

    const nameInput = screen.getByLabelText(/name/i, { selector: "input" });
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("Trabajador");
  });

  test("renders the bio textarea", () => {
    render(<Application />);

    const bioTextarea = screen.getByLabelText(/bio/i, { selector: "textarea" });
    expect(bioTextarea).toBeInTheDocument();
  });

  test("renders the job location select element", () => {
    render(<Application />);

    const jobLocationSelect = screen.getByLabelText(/job location/i, {
      selector: "select",
    });
    expect(jobLocationSelect).toBeInTheDocument();
    expect(jobLocationSelect).toHaveValue("");
    expect(jobLocationSelect).toHaveDisplayValue("Select a country");
  });

  test("renders the terms and conditions checkbox", () => {
    render(<Application />);

    const termsCheckbox = screen.getByRole("checkbox", { name: /terms/i });
    expect(termsCheckbox).toBeInTheDocument();
    expect(termsCheckbox).not.toBeChecked();
    expect(termsCheckbox).toHaveAccessibleName(/terms and conditions/i);
  });

  test("renders the submit button", () => {
    render(<Application />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
