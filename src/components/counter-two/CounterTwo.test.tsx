import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo Component", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    //Arrange
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    //Act
    await user.click(incrementButton);
    await user.click(decrementButton);

    //Assert
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
