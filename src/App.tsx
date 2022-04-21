import { createContext, useEffect, useState } from "react";
import { mainObjT, initT } from "./types";
import FullComment from "./components/FullComment/FullComment";

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
    <div>
      <MainObjContext.Provider value={{ init, setInit }}>
        <div>
          {init.comments &&
            init.comments.map((response, index) => {
              return (
                <div>
                  <FullComment
                    key={index}
                    username={response.user.username}
                    png={response.user.image.png}
                    createdAt={response.createdAt}
                    content={response.content}
                    score={response.score}
                    index={index}
                  />
                  {response.replies &&
                    response.replies.map((reply, replyIndex) => {
                      return (
                        <div key={replyIndex}>
                          <FullComment
                            username={reply.user.username}
                            png={reply.user.image.png}
                            createdAt={reply.createdAt}
                            content={reply.content}
                            score={reply.score}
                            replyIndex={replyIndex}
                            index={index}
                          />
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </MainObjContext.Provider>
    </div>
  );
}
