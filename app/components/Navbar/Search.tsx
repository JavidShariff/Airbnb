'use client';
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="
    rounded-full
    w-full
    shadow-sm
    md:w-auto
    py-2
    cursor-pointer
    transition
    "
    >

    <div
      className="
      flex 
      flex-row 
      items-center
      justify-between
      gap-3
      md:gap-0
      "
    >
      <div
        className="
        text-sm
        font-semibold
        px-6
        "
      >
        Anywhere
      </div>
      <div
        className="
        hidden
        md:block
        flex-1
        border-x-[1px]
        text-center
        text-sm
        font-semibold
        px-6
        "
      >
        Any Week
      </div>
      <div className="
      flex
      flex-row
      pl-6
      pr-2
      items-center
      text-gray-600
      text-sm
      gap-3">
        <div className="hidden md:block"> Add Guests</div>
        <div className="
        bg-rose-500
        p-2
        text-white
        rounded-full">
            <BiSearch size={20}/>
        </div>
      </div>
    </div>

      </div>
  );
};

export default Search;
