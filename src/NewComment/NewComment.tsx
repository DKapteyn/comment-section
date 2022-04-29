import { useContext } from "react";

import { MainObjContext } from "../App";
import Button from "../Button/Button";
import { newCommentT } from "../types";

export default function NewComment({ png, username }: newCommentT) {
  const { init, setInit } = useContext(MainObjContext);

  let thisthing = {
    id: Date.now(),
    content: "say what?",
    createdAt: "Today",
    score: 0,
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
      },
      username: "juliusomo",
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
      <textarea
        className=" row-start-1 row-end-3 col-start-1 col-end-3 place-self-center border-[1px] border-[#E9EBF0] rounded-lg
w-full h-24 resize-none pt-3 pl-4 placeholder:text-grayishBlue  "
        placeholder="Add a comment...."
      ></textarea>
      <div
        className="row-start-3 row-end-3 col-start-2 col-end-2 self-end
       justify-self-end "
      >
        <Button
          name="send"
          logic={() => {
            let thisInit = { ...init };
            thisInit.comments.push({
              ...thisthing,
            });

            setInit(thisInit);
            console.log(init);
          }}
        />
      </div>
    </div>
  );
}
