import deleteButton from "./DeleteButton/DeleteButton";

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
  currentUser: {
    image: {
      png: string;
    };
    username: string;
  };

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

export type newCommentT = {
  png: string;

  username: string;
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
  currentUser: string;
};

export type FullCommentT = {
  currentUser: string;
  content: string;
  createdAt: string;
  score: number;
  png: string;
  username: string;
  index: number;
  replyIndex?: number;
};

export type ButtonT = {
  name: string;
  logic: () => void;
  backgroundColor: string; //must include bg-prefix
  width: string;
};

export type deleteButtonT = {
  index: number;
  replyIndex?: number;
};

export type modalT = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  modalState: boolean;
  index: number;
  replyIndex?: number;
};
