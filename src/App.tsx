import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as DuidLogo } from "./assets/duidLogo.svg";
import { ReactComponent as HomeRouteLogo } from "./assets/homeRouteLogo.svg";
import { ReactComponent as WalletLogo } from "./assets/walletLogo.svg";
import { ReactComponent as CalendarLogo } from "./assets/calendarLogo.svg";
import { ReactComponent as StatsLogo } from "./assets/statsLogo.svg";
import { ReactComponent as MessagesLogo } from "./assets/messagesLogo.svg";
import { ReactComponent as SettingsLogo } from "./assets/settingsLogo.svg";
import { ReactComponent as ProfileImage } from "./assets/profileImage.svg";
import { ReactComponent as DropdownLogo } from "./assets/dropdownLogo.svg";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  console.log("isClicked", isClicked);
  return (
    <div className="flex flex-wrap sm:flex-row flex-col-reverse h-screen items-end sm:items-start ">
      <div className="border-2 w-screen sm:w-88px h-fit sm:h-screen flex sm:flex-none sm:flex-col  py-2 sm:py-0 overflow-auto">
        <div className="sm:block hidden mt-[20px] sm:mt-[40px] mx-auto w-fit h-fit grid justify-items-center">
          <DuidLogo />
        </div>
        <div className="sm:mt-[100px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <HomeRouteLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <WalletLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <CalendarLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <StatsLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <MessagesLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto p-2 transition ease-in-out hover:scale-150">
          <SettingsLogo />
        </div>
      </div>
      <div
        className={`grow border-2 border-black  justify-end px-2 w-screen sm:w-fit border-2 sm:h-screen bg-creamyWhite`}
      ></div>
      <div
        className={`absolute sm:relative sm:flex-none ${
          isClicked ? "sm:w-[400px] w-screen" : "w-0"
        } h-screen sm:self-end bg-duidPurple transition-all ease-in-out duration-700`}
      >
        <div className="grid"></div>
      </div>
      <div
        className={`${
          isClicked ? "right-1/4 sm:right-44" : "right-8"
        } absolute top-0 transition-all ease-in-out duration-700`}
      >
        <div
          className={`flex justify-between items-center rounded-full  ${
            isClicked ? "w-[208px]" : "w-[45px]"
          } sm:w-[208px] h-[40px] mt-[40px] ml-[20px] sm:pr-4 bg-gray-400 py-1 px-2 transition-all ease-in-out duration-700`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="">
            <ProfileImage className="bg-duidPurple rounded-full" />
          </div>
          <div
            className={`text-white font-sans ${
              isClicked
                ? "opacity-100 delay-700 duration-700"
                : "opacity-0 duration-150"
            } sm:opacity-100 sm:block transition-opacity ease-in `}
          >
            Abraham Das
          </div>
          <div className={`${isClicked ? "" : "hidden"} sm:block`}>
            <DropdownLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
