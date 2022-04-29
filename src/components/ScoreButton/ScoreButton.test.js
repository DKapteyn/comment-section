import ScoreButton from "./ScoreButton";
import {
  fireEvent,
  getByTestId,
  render,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App, { MainObjContext } from "../../App";

afterEach(cleanup);

test("click plus", () => {
  const { getByTestId } = render(<ScoreButton score={12} index={1} />);

  fireEvent.click(getByTestId("plus"));
  expect(getByTestId("score").textContent).toEqual(13);
});
