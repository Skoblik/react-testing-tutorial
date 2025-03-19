import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should increment twice the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 8 },
    });
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(10);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });

  test("should decrement twice the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 12 },
    });
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(10);
  });

  test("counter E2E", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(11);

    act(() => result.current.increment());
    expect(result.current.count).toBe(12);

    act(() => result.current.decrement());
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(9);
  });
});
