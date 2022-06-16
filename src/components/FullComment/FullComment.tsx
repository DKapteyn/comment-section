import UserInfo from "../UserInfo/UserInfo";
import ScoreButton from "../ScoreButton/ScoreButton";
import ReplyButton from "../ReplyButton/ReplyButton";
import { FullCommentT } from "../../types";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import { useState, useContext } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { MainContext } from "../../mainContext";

import NewComment from "../NewComment/NewComment";

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
  //if true text can be edited
  const [editText, setEditText] = useState(false);
  //storage of text for editing
  const [editedText, setEditedText] = useState(content);
  //storage of main Object through Context API
  const { init, setInit } = useContext(MainContext);
  //if true comment can be replied to
  const [reply, setReply] = useState(false);

  //defining location of the edited text in the main object
  function ChangeText(): void {
    let newInit = { ...init };
    replyIndex === undefined
      ? (newInit.comments[index].content = editedText)
      : (newInit.comments[index].replies[replyIndex].content = editedText);
    setInit(newInit);
    setEditText(false);
  }

  return (
    <div
      className={`${
        replyIndex === undefined ? "md:w-full" : "lg:w-11/12 lg:ml-auto "
      }`}
    >
      <div className="p-4 m-4 bg-white rounded-lg">
        <UserInfo
          png={png}
          createdAt={createdAt}
          username={username}
          currentUser={currentUser}
        />
        <div>
          {editText ? (
            <Text setNewText={setEditedText} newText={editedText} />
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <ScoreButton
            score={score}
            index={index}
            replyIndex={replyIndex}
            currentUser={currentUser}
            username={username}
          />
          {currentUser === username ? (
            <div className="flex gap-4">
              <DeleteButton index={index} replyIndex={replyIndex} />
              <EditButton editText={editText} setEditText={setEditText} />
              {editText && <Button name="update" logic={() => ChangeText()} />}
            </div>
          ) : (
            <ReplyButton setReply={setReply} />
          )}
        </div>
      </div>
      {reply && (
        <NewComment
          png={init.currentUser.image.png}
          setReply={setReply}
          index={index}
          replyIndex={replyIndex}
          reply={true}
          username={currentUser}
          repliedTo={init.comments[index].user.username}
        />
      )}
    </div>
  );
}
