import { createContext, useEffect, useState } from "react";
import { mainObjT, initT } from "./types";
import LikeButton from "./components/LikeButton/LikeButton";

export const MainObjContext = createContext({} as mainObjT);

export default function App() {
  const [init, setInit] = useState<initT>({} as initT);

  useEffect(() => {
    async function initialStateFetch() {
      let response = await fetch("data.json");
      let data = await response.json();
      setInit(data);
    }
    initialStateFetch();
  }, []);

  return (
    <>
      <MainObjContext.Provider value={{ init, setInit }}>
        <div>
          {init.comments &&
            init.comments.map((response, index) => {
              return (
                <div key={index}>
                  <div>{response.user.username}</div>
                  <div>{response.content}</div>
                  <LikeButton
                    score={response.score}
                    index={index}
                    id={response.id}
                  />
                  {response.replies &&
                    response.replies.map((reply, replyIndex) => {
                      return (
                        <div key={reply.id}>
                          <div key={reply.id}>{reply.content}</div>
                          <LikeButton
                            score={reply.score}
                            replyIndex={replyIndex}
                            index={index}
                            id={response.id}
                          />
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </MainObjContext.Provider>
    </>
  );
}
