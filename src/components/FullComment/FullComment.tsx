import UserInfo from "../UserInfo/UserInfo";
import ScoreButton from "../ScoreButton/ScoreButton";
import ReplyButton from "../ReplyButton/ReplyButton";
import { FullCommentT } from "../../types";

export default function FullComment({
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
      <UserInfo png={png} createdAt={createdAt} username={username} />
      <p className="bodyNormal mb-6">{content}</p>
      <div className="flex justify-between">
        <ScoreButton score={score} index={index} replyIndex={replyIndex} />
        <ReplyButton />
      </div>
    </div>
  );
}
