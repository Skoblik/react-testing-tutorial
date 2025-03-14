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

  test("verify the image is rendered", () => {
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
});
