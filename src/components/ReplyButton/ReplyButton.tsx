import { replyT } from "../../types";

export default function ReplyButton({ setReply }: replyT) {
  return (
    <div
      onClick={() => setReply(true)}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <img
        className="group-hover:opacity-30"
        src="./images/icon-reply.svg"
        alt="reply arrow"
      />
      <p className=" text-mainPurple  bodyBold group-hover:text-hoverPurple">
        Reply
      </p>
    </div>
  );
}
