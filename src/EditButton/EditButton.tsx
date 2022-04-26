export default function EditButton() {
  return (
    <div className="group flex gap-2 items-center  cursor-pointer">
      <img
        className="group-hover:opacity-40"
        src="/images/icon-edit.svg"
        alt="pencil"
      />
      <h3 className="text-mainPurple group-hover:text-hoverPurple bodyBold">
        Edit
      </h3>
    </div>
  );
}
