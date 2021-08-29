import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

describe("Button Component", () => {
  const renderBtn = (btn: ButtonProps) => render(<Button {...btn} />);
  const btnId = "button-component";
  it("Passed label prop reflecting", async () => {
    const label = "Test label";
    const btn = renderBtn({ label });
    const b = await btn.findByTestId(btnId);
    expect(b).toHaveTextContent(label);
  });

  it("Secondary class applying", async () => {
    const btn = renderBtn({ label: "", isSecondary: true });
    const b = await btn.findByTestId(btnId);
    expect(b).toHaveClass("btn-secondary");
  });
  it("OnClick function invocing", (done: () => {}) => {
    const onClick = () => {
      done();
    };
    const btn = renderBtn({ label: "", onClick });
    const b = btn.getByTestId(btnId);
    fireEvent.click(b);
  });
});
