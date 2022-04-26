import { userInfoT } from "../../types";

export default function UserInfo({
  png,
  createdAt,
  username,
  currentUser,
}: userInfoT) {
  return (
    <div className="flex gap-2 mb-4 items-center ">
      <img className=" mr-2 h-8 w-8" src={png} alt="user avatar" />
      <h2 className="bodyBold">{username}</h2>
      {currentUser === username && (
        <div className="  w-9 h-5 text-[0.8125rem] leading-normal  item-center justify-center bg-mainPurple font-medium text-white grid rounded-sm">
          you
        </div>
      )}
      <h2 className="bodyNormal ml-2">{createdAt}</h2>
    </div>
  );
}
