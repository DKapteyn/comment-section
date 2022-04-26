import { ButtonT } from "../types";

export default function Button({
  name,
  logic,
  backgroundColor,
  width,
}: ButtonT) {
  return (
    <div
      className={` ${backgroundColor}  h-12 ${width} bodyBold text-white rounded-lg grid place-items-center cursor-pointer`}
      onClick={logic}
    >
      {name.toUpperCase()}
    </div>
  );
}
