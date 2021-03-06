import React, { useState } from "react";
import { ReactComponent as ProfileImage } from "../assets/profileImage.svg";
import { ReactComponent as DropdownLogo } from "../assets/dropdownLogo.svg";
import { useAppSelector } from "../hooks/store";

interface IProfileButtonProps {
  isClicked: boolean;
  onClick: () => void;
}

const ProfileButton = ({ isClicked, onClick }: IProfileButtonProps) => {
  const user = useAppSelector((state) => state.user);

  const userFullName = [user.firstName, user.lastName].join(" ");

  return (
    <div
      className={`flex justify-between items-center rounded-full  ${
        isClicked ? "w-[208px]" : "w-[45px]"
      } h-[40px] sm:pr-4 bg-gray-400 py-1 px-2 z-50 transition-all ease-in-out duration-700`}
      onClick={() => onClick()}
    >
      <div className="">
        <ProfileImage className="bg-duidPurple rounded-full" />
      </div>
      <div
        className={`text-white font-sans ${
          isClicked
            ? "opacity-100 delay-700 duration-700"
            : "opacity-0 duration-150 hidden"
        } transition-opacity ease-in `}
      >
        {userFullName}
      </div>
      <div className={`${isClicked ? "" : "hidden"}`}>
        <DropdownLogo />
      </div>
    </div>
  );
};

export default ProfileButton;
