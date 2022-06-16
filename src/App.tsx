import { createContext, useContext } from "react";
import { mainObjT } from "./types";
import FullComment from "./components/FullComment/FullComment";
import NewComment from "./components/NewComment/NewComment";
import { MainContext } from "./mainContext";

export const MainObjContext = createContext({} as mainObjT);

export default function App() {
  const { init } = useContext(MainContext);

  return (
    <div>
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
                        <div key={reply.id}>
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
        <NewComment
          png={init.currentUser.image.png}
          username={init.currentUser.username}
          reply={false}
        />
      )}
    </div>
  );
}
