export type LikeButtonT = {
  score: number;
  index: number;
  replyIndex?: number;
  id: number;
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
    user: { username: string };
    content: string;
    score: number;
    id: number;
    replies: {
      user: { username: string };
      content: string;
      score: number;
      id: number;
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
