export default function ReplyButton() {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <img
        className="group-hover:opacity-30"
        src="/images/icon-reply.svg"
        alt="reply arrow"
      />
      <p className=" text-mainPurple  bodyBold group-hover:text-hoverPurple">
        Reply
      </p>
    </div>
  );
}
