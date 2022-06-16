import { textT } from "../../types";

//setNewText is a placeholder for any state used to store text data
export default function Text({ setNewText, placeholder, newText }: textT) {
  return (
    <textarea
      className="border-[1px] border-[#E9EBF0] rounded-lg
    w-full h-24 resize-none pt-3 pl-4 placeholder:text-grayishBlue focus:outline-none  focus:border-mainPurple"
      onChange={(e) => setNewText(e.target.value)}
      placeholder={placeholder}
      value={newText}
    ></textarea>
  );
}
