import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list"); //finds the UL tag
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem"); //finds the LI tags
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders the start learning button", () => {
    render(<Skills skills={skills} />);
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });

  test("start learning button is not rendeted", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
