import Button from "../Button/Button";
import { modalT } from "../types";
import { MainObjContext } from "../App";
import { useContext } from "react";

export default function Modal({
  replyIndex,
  index,
  setModalState,
  modalState,
}: modalT) {
  const { init, setInit } = useContext(MainObjContext);

  function deleteComment() {
    let deleteInit = { ...init };
    replyIndex === undefined
      ? deleteInit.comments.splice(index, 1)
      : deleteInit.comments[index].replies.splice(replyIndex, 1);
    setInit(deleteInit);
  }

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 bottom-0 right-0 bg-black/50 
      grid place-content-center"
    >
      <div className=" w-[25rem] h-[15.75rem] bg-white rounded-lg p-8 grid gap-5">
        <h2 className="headingLarge">Delete comment</h2>
        <p className="bodyNormal">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between">
          <Button
            name="No, cancel"
            logic={() => setModalState(!modalState)}
            backgroundColor="bg-grayishBlue"
            width="w-[10.0625rem]"
          />
          <Button
            name="yes,delete"
            logic={() => deleteComment()}
            backgroundColor="bg-softRed"
            width="w-[10.0625rem]"
          />
        </div>
      </div>
    </div>
  );
}
