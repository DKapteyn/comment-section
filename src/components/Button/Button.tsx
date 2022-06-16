import { ButtonT } from "../../types";

export default function Button({
  name,
  logic,
  backgroundColor,
  width,
}: ButtonT) {
  return (
    <div
      /*width and background color are both optional and will default to 
    a bg of main purple and width of 6.5rem*/
      className={` ${backgroundColor ? backgroundColor : "bg-mainPurple"}   
      ${width ? width : "w-[6.5rem]"} 
      h-12   bodyBold text-white rounded-lg grid place-items-center cursor-pointer`}
      onClick={logic}
    >
      {name.toUpperCase()}
    </div>
  );
}
