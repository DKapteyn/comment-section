import UserInfo from "../UserInfo/UserInfo";
import ScoreButton from "../ScoreButton/ScoreButton";
import ReplyButton from "../ReplyButton/ReplyButton";
import { FullCommentT } from "../../types";
import DeleteButton from "../../DeleteButton/DeleteButton";
import EditButton from "../../EditButton/EditButton";

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
  return (
    <div className="p-4 m-4 bg-white rounded-lg">
      <UserInfo
        png={png}
        createdAt={createdAt}
        username={username}
        currentUser={currentUser}
      />
      <p className="bodyNormal mb-6">{content}</p>
      <div className="flex justify-between">
        <ScoreButton score={score} index={index} replyIndex={replyIndex} />
        {currentUser === username ? (
          <div className="flex gap-4">
            <DeleteButton index={index} replyIndex={replyIndex} />
            <EditButton />
          </div>
        ) : (
          <ReplyButton />
        )}
      </div>
    </div>
  );
}
