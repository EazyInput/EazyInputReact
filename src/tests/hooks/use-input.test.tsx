import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { UseInputHarness } from "./use-input.harness";

describe("use-input", () => {
  it("updates values correctly", async () => {
    const user = userEvent.setup();

    render(<UseInputHarness />);

    await user.click(screen.getByLabelText(/input/i));

    const value = "abc123";

    await user.keyboard(value);

    expect(await screen.findByLabelText(/input/i)).toHaveValue(value);
  });
});
