import { useContext } from "react";
import { ScoreButtonT } from "../../types";
import { MainObjContext } from "../../App";

export default function ScoreButton({
  score,
  index,
  replyIndex,
}: ScoreButtonT) {
  let { setInit, init } = useContext(MainObjContext);

  function MoveScoreUp(): void {
    let newInit = { ...init };

    replyIndex !== undefined
      ? (newInit.comments[index].replies[replyIndex].score = score + 1)
      : (newInit.comments[index].score = score + 1);

    setInit(newInit);
  }

  function MoveScoreDown(): void {
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
        onClick={() => MoveScoreUp()}
      >
        <img src="/images/icon-plus.svg" alt="plus" />
      </div>
      <div className="text-mainPurple headingMedium ">{score}</div>
      <div
        className="h-full w-full grid place-items-center cursor-pointer"
        onClick={() => MoveScoreDown()}
      >
        <img src="/images/icon-minus.svg" alt="minus" />
      </div>
    </div>
  );
}
