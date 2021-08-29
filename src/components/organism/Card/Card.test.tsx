import Card, { CardProps } from "./Card";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Card component", () => {
  const renderCard = (props: CardProps) => render(<Card {...props} />);
  it("Title and description applying from props", () => {
    const props = { desc: "test-desc", title: "test-title" };
    const card = renderCard(props);
    const desc = card.getByText(props.desc);
    const title = card.getByText(props.title);
    expect(desc && title).toBeTruthy();
  });

  it("Buttons' events are fired on click", () => {
    const mockHandler = jest.fn();
    renderCard({
      title: "",
      desc: "",
      onDeleteClick: mockHandler,
      onEditClick: mockHandler,
    });
    fireEvent.click(screen.getByText(/edit/i));
    fireEvent.click(screen.getByText(/delete/i));
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
