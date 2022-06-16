import { deleteButtonT } from "../../types";

import { useState } from "react";
import Modal from "../Modal/Modal";

export default function DeleteButton({ index, replyIndex }: deleteButtonT) {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setModalState(!modalState)}
        className="group flex items-center gap-2 cursor-pointer"
      >
        <img
          className="group-hover:opacity-40"
          src="/images/icon-delete.svg"
          alt="Garbage Can"
        />
        <h3 className="text-softRed  group-hover:text-paleRed bodyBold">
          Delete
        </h3>
      </div>

      {modalState && (
        <Modal
          index={index}
          replyIndex={replyIndex}
          modalState={modalState}
          setModalState={setModalState}
        />
      )}
    </>
  );
}
