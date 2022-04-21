export type ScoreButtonT = {
  score: number;
  index: number;
  replyIndex?: number;
};

export type responseT = {
  id: string;
  user: { username: string };
  content: string;
  replies: [];
  score: number;
};

export type replyT = {
  content: string;
  id: string;
  score: number;
};

export type initT = {
  comments: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
      };
      username: string;
    };
    replies: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      user: {
        image: {
          png: string;
        };
        username: string;
      };
    }[];
  }[];
};

export type setInitT = {
  setInit: React.Dispatch<React.SetStateAction<initT>>;
};

export type mainObjT = {
  init: initT;
  setInit: React.Dispatch<React.SetStateAction<initT>>;
};

export type userInfoT = {
  png: string;
  createdAt: string;
  username: string;
};

export type FullCommentT = {
  content: string;
  createdAt: string;
  score: number;
  png: string;
  username: string;
  index: number;
  replyIndex?: number;
};
