import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users Component", () => {
  test("renders correctly", async () => {
    render(<Users isFailRequest={false} />);
    const textElement = screen.getByRole("heading", { name: "Users" });
    expect(textElement).toBeInTheDocument();
    //await screen.findByText("Leanne Graham");
  });

  test("renders a list of users", async () => {
    render(<Users isFailRequest={false} />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(10);
  });

  test("renders an error message", async () => {
    render(<Users isFailRequest={true} />);
    const errorMessage = await screen.findByText("Error fetching users");
    expect(errorMessage).toBeInTheDocument();
  });
});
