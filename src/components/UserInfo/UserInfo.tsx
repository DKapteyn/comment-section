import { userInfoT } from "../../types";

export default function UserInfo({ png, createdAt, username }: userInfoT) {
  return (
    <div className="flex gap-4 mb-4 items-center">
      <img className=" h-8 w-8" src={png} alt="user avatar" />
      <h2 className="bodyBold">{username}</h2>
      <h2 className="bodyNormal">{createdAt}</h2>
    </div>
  );
}
