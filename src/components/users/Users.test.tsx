import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users Component", () => {
  test("renders correctly", async () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", { name: "Users" });
    expect(textElement).toBeInTheDocument();
    //await screen.findByText("Leanne Graham");
  });
});
