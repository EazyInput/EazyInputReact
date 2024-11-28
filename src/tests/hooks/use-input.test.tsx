import { renderHook, act } from "@testing-library/react";
import { useInput } from "../../library";

describe("use-input", () => {
  it("has correct defaults", () => {
    const { result } = renderHook(() =>
      useInput<string, string>("default", (x) => x),
    );

    expect(result.current.value).toEqual("default");
    expect(result.current.error).toEqual("");
    expect(result.current.valid).toEqual(false);
    expect(result.current.dirty).toEqual(false);
  });

  it("updates values correctly", () => {
    const { result } = renderHook(() => useInput<string, string>("", (x) => x));

    act(() => {
      result.current.handleUpdate("new", true, "");
    });

    expect(result.current.valid).toEqual(true);
  });
});
