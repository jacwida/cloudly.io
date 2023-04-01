import { SearchIcon } from "./Icons";

export default function Search() {
  return (
    <div className="flex items-center rounded-[100px] bg-white gap-4  px-4 py-3 flex-1 my-4 ">
      <SearchIcon />
      <input
        placeholder="Search Your Documents"
        className=" outline-none h-fit"
      />
    </div>
  );
}
