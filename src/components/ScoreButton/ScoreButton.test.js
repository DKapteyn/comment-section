import ScoreButton from "./ScoreButton";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("click plus", () => {
  render(<ScoreButton />);
  const plus = screen.getByTestId("plusButton");
  const score = screen.getByText("score");
  console.log(score);
  fireEvent.click(plus);
  expect(score).toEqual();
});
