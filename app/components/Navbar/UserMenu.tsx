"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avator from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModel from "../hooks/useRegisterModel";

const UserMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);

    const registorModel = useRegisterModel();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div
        className="
        flex
        flex-row
        gap-3
        items-center"
      >
        <div
          className="
    hidden
    md:block
    shadow-sm
    text-sm
    hover:bg-neutral-100
    p-3
    md:px-2
    md:py-1
    transition
    hover:shadow-md
    cursor-pointer
    rounded-full
    font-semibold
    "
        >
          Airbnb your home
        </div>
        <div
          className="
    md:px-2
    md:py-1
    flex
    flex-row
    gap-3
    items-center
    border-[1px]
    border-neutral-200
    rounded-full
    hover:shadow-sm
    cursor-pointer
    transition
    "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avator />
          </div>
        </div>
      </div>
      {IsOpen && (
        <div
          className="
        absolute
        rounded-full
        shadow-sm
        md:w-3/4
        bg-white
        right-0
        top-12
        text-sm
        "
        >
          <div
            className="
          flex
          flex-col
          cursor-pointer"
          >
            <>
              <MenuItem onClick={registorModel.onOpen} label="Sign up" />
              <MenuItem onClick={registorModel.onOpen}  label="Login" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
