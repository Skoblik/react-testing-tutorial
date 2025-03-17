import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

test("renders correctly", () => {
  render(<CounterTwo count={0} />);
  const textElement = screen.getByText("Counter Two");
  expect(textElement).toBeInTheDocument();
});
