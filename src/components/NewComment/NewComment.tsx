import { useContext, useState } from "react";
import Text from "../Text/Text";
import { MainContext } from "../../mainContext";
import Button from "../Button/Button";
import { newCommentT } from "../../types";

export default function NewComment({
  png,
  username,
  reply,
  index,
  setReply,
  replyIndex,
  repliedTo,
}: newCommentT) {
  //storage for main object using Context API
  const { init, setInit } = useContext(MainContext);
  //storage of name being replied to

  //only adds @reply to reply NewComment Components
  let replyText: string;
  repliedTo === undefined ? (replyText = "") : (replyText = `@${repliedTo}`);

  //controls the text content in the textbox
  const [newText, setNewText] = useState(`${replyText}`);

  let newCommentObject = {
    id: Date.now(),
    content: newText,
    createdAt: "Today",
    score: 0,
    user: {
      image: {
        png,
      },
      username,
    },
    replies: [],
  };

  return (
    <div
      className="grid grid-cols-2 grid-rows-3 bg-white h-48  
    rounded-lg m-4 p-4 "
    >
      <img
        className="h-8 w-8 row-start-3 row-end-3 col-span-1 self-end mb-2 "
        src={png}
        alt="user avatar"
      />

      <div className=" row-start-1 row-end-3 col-start-1 col-end-3 place-self-center w-full ">
        <Text
          placeholder="Add a comment...."
          setNewText={setNewText}
          newText={newText}
        />
      </div>
      {/*places NewComment whether responding to a reply,responding to original comment 
         or making an original comment. also changes button name and logic
          if a reply or original comment*/}
      <div
        className="row-start-3 row-end-3 col-start-2 col-end-2 self-end
       justify-self-end "
      >
        {reply && replyIndex !== undefined ? (
          index !== undefined &&
          replyIndex !== undefined &&
          setReply && (
            <Button
              name="reply"
              logic={() => {
                let thisInit = { ...init };
                thisInit.comments[index].replies.splice(replyIndex + 1, 0, {
                  ...newCommentObject,
                });

                setInit(thisInit);
                setReply(false);
              }}
            />
          )
        ) : reply ? (
          index !== undefined &&
          setReply && (
            <Button
              name="reply"
              logic={() => {
                let thisInit = { ...init };
                thisInit.comments[index].replies.unshift({
                  ...newCommentObject,
                });

                setInit(thisInit);
                setReply(false);
              }}
            />
          )
        ) : (
          <Button
            name="send"
            logic={() => {
              let thisInit = { ...init };
              thisInit.comments.push({
                ...newCommentObject,
              });

              setInit(thisInit);
              setNewText("");
            }}
          />
        )}
      </div>
    </div>
  );
}
