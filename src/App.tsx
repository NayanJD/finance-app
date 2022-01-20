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
  const [isClicked, setIsClicked] = useState(true);

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
      <div className="grow w-screen sm:w-fit sm:h-screen bg-creamyWhite">
        fadfad
      </div>
      <div
        className={`hidden sm:flex-none  sm:block  ${
          isClicked ? "w-[400px]" : "w-[0px]"
        } h-screen  self-end bg-duidPurple transition-all ease-in-out`}
      >
        <div className="grid">
          <div
            className="flex justify-between items-center rounded-full w-[208px] h-[40px] mt-[40px] ml-[20px] pr-4 bg-gray-400 py-1 px-2"
            onClick={() => setIsClicked(false)}
          >
            <div>
              <ProfileImage className="bg-duidPurple rounded-full" />
            </div>
            <div className="text-white font-sans">Abraham Das</div>
            <div>
              <DropdownLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
