import { createContext, useEffect, useState } from "react";
import { mainObjT, initT } from "./types";
import FullComment from "./components/FullComment/FullComment";
import NewComment from "./NewComment/NewComment";

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
          <div>
            {init.comments &&
              init.comments.map((response, index) => {
                return (
                  <div key={response.id}>
                    <FullComment
                      currentUser={init.currentUser.username}
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
                          <div key={reply.content}>
                            <FullComment
                              currentUser={init.currentUser.username}
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
        </div>
        {init.currentUser && (
          <NewComment png={init.currentUser.image.png} username="fred" />
        )}
      </MainObjContext.Provider>
    </div>
  );
}
