import { useContext, useState } from "react";
import { ScoreButtonT } from "../../types";
import { MainContext } from "../../mainContext";

export default function ScoreButton({
  score,
  index,
  replyIndex,
  currentUser,
  username,
}: ScoreButtonT) {
  const { setInit, init } = useContext(MainContext);
  //checks if score has been put up
  const [isScoreUp, setScoreUp] = useState(false);
  //checks if score has been put down
  const [isScoreDown, setScoreDown] = useState(false);

  //checks if score has been moved up or if currentUser is trying to change their own score.
  function moveScoreUp(): void {
    if (isScoreUp === true || currentUser === username) {
      return;
    } else if (isScoreUp === false && isScoreDown === true) {
      scoreUp();
      setScoreDown(false);
    } else if (isScoreUp === false && isScoreDown === false) {
      scoreUp();
      setScoreUp(true);
    }
  }
  //changes score up
  function scoreUp(): void {
    let newInit = { ...init };
    replyIndex !== undefined
      ? (newInit.comments[index].replies[replyIndex].score = score + 1)
      : (newInit.comments[index].score = score + 1);
    setInit(newInit);
  }
  //checks if score has been moved up or if currentUser is trying to change their own score.
  function moveScoreDown(): void {
    if (isScoreDown === true || currentUser === username) {
      return;
    } else if (isScoreDown === false && isScoreUp === true) {
      scoreDown();
      setScoreUp(false);
    } else if (isScoreUp === false && isScoreDown === false) {
      scoreDown();
      setScoreDown(true);
    }
  }
  //moves score down
  function scoreDown(): void {
    let newInit = { ...init };

    replyIndex !== undefined
      ? (newInit.comments[index].replies[replyIndex].score = score - 1)
      : (newInit.comments[index].score = score - 1);

    setInit(newInit);
  }

  return (
    <div className="bg-[#F5F6FA] flex items-center h-[40px] w-[100px] justify-evenly rounded-[10px]">
      <div
        className="h-full w-full grid place-items-center cursor-pointer"
        onClick={() => moveScoreUp()}
      >
        <img src="./images/icon-plus.svg" alt="plus" />
      </div>
      <div className="text-mainPurple headingMedium ">{score}</div>
      <div
        className="h-full w-full grid place-items-center cursor-pointer"
        onClick={() => moveScoreDown()}
      >
        <img src="./images/icon-minus.svg" alt="minus" />
      </div>
    </div>
  );
}
