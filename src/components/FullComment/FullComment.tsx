import UserInfo from "../UserInfo/UserInfo";
import ScoreButton from "../ScoreButton/ScoreButton";
import ReplyButton from "../ReplyButton/ReplyButton";
import { FullCommentT } from "../../types";
import DeleteButton from "../../DeleteButton/DeleteButton";
import EditButton from "../../EditButton/EditButton";
import { useState, useContext } from "react";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import { MainObjContext } from "../../App";

export default function FullComment({
  currentUser,
  content,
  createdAt,
  score,
  png,
  username,
  index,
  replyIndex,
}: FullCommentT) {
  const [editText, setEditText] = useState(false);
  const [editedText, setEditedText] = useState("dcefalt");
  const { init, setInit } = useContext(MainObjContext);

  function ChangeText(): void {
    let newInit = { ...init };
    replyIndex === undefined
      ? (newInit.comments[index].content = editedText)
      : (newInit.comments[index].replies[replyIndex].content = editedText);
    setInit(newInit);
    setEditText(false);
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg">
      <UserInfo
        png={png}
        createdAt={createdAt}
        username={username}
        currentUser={currentUser}
      />
      <div>
        {editText ? (
          <Text text={content} setNewText={setEditedText} />
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <ScoreButton score={score} index={index} replyIndex={replyIndex} />
        {currentUser === username ? (
          <div className="flex gap-4">
            <DeleteButton index={index} replyIndex={replyIndex} />
            <EditButton editText={editText} setEditText={setEditText} />
            {editText && <Button name="update" logic={() => ChangeText()} />}
          </div>
        ) : (
          <ReplyButton />
        )}
      </div>
    </div>
  );
}
