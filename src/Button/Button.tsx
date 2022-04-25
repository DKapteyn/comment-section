import { ButtonT } from "../types";

export default function Button({ name, logic, backgroundColor }: ButtonT) {
  return (
    <div
      className={` ${backgroundColor}  h-12 w-[6.5rem] bodyBold text-white rounded-lg grid place-items-center`}
      onClick={logic}
    >
      {name.toUpperCase()}
    </div>
  );
}
