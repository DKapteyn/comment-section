import { useContext, useState } from "react";
import Text from "../Text/Text";
import { MainObjContext } from "../App";
import Button from "../Button/Button";
import { newCommentT } from "../types";

export default function NewComment({
  png,
  username,
  reply,
  index,
  setReply,
  replyIndex,
}: newCommentT) {
  const { init, setInit } = useContext(MainObjContext);
  const [newText, setNewText] = useState("");

  let newThing = {
    id: Date.now(),
    content: newText,
    createdAt: "Today",
    score: 0,
    user: {
      image: {
        png: init.currentUser.image.png,
      },
      username: init.currentUser.username,
    },
    replies: [],
  };

  return (
    <div
      className="grid grid-cols-2 grid-rows-3 bg-white h-48  
    rounded-lg m-4 p-4"
    >
      <img
        className="h-8 w-8 row-start-3 row-end-3 col-span-1 self-end mb-2 "
        src={png}
        alt="user avatar"
      />

      <div className=" row-start-1 row-end-3 col-start-1 col-end-3 place-self-center w-full ">
        <Text
          placeholder="Add a comment...."
          text=""
          setNewText={setNewText}
          newText={newText}
        />
      </div>

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
                  ...newThing,
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
                  ...newThing,
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
                ...newThing,
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
