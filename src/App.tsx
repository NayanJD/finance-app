import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as DuidLogo } from "./assets/duidLogo.svg";
import { ReactComponent as HomeRouteLogo } from "./assets/homeRouteLogo.svg";
import { ReactComponent as WalletLogo } from "./assets/walletLogo.svg";
import { ReactComponent as CalendarLogo } from "./assets/calendarLogo.svg";
import { ReactComponent as StatsLogo } from "./assets/statsLogo.svg";
import { ReactComponent as MessagesLogo } from "./assets/messagesLogo.svg";
import { ReactComponent as SettingsLogo } from "./assets/settingsLogo.svg";

function App() {
  return (
    <div className="flex flex-wrap sm:flow-row flex-col-reverse h-screen sm:items-start items-end border-2 ">
      <div className="border-2 w-screen sm:w-88px h-fit sm:h-screen  flex flex-row sm:flex-col py-2 sm:py-0 justify-items-center items-center overflow-auto">
        {/* <div className="mt-[40px] text-center font-extrabold text-iconDColor text-xl underline underline-offset-2 decoration-2">
          D
        </div>
        <div className="text-center text-duidRed font-semibold text-xs">
          Duid
        </div> */}
        <div className="hidden sm:block mt-[20px] sm:mt-[40px] h-fit grid justify-items-center">
          <DuidLogo />
        </div>
        <div className="sm:mt-[100px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <HomeRouteLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <WalletLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <CalendarLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <StatsLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <MessagesLogo />
        </div>
        <div className="sm:mt-[20px] h-fit rounded-md w-fit mx-auto grid p-2 justify-items-center transition ease-in-out hover:scale-150">
          <SettingsLogo />
        </div>
      </div>
      <div className="grow sm:h-screen w-screen border-2 bg-creamyWhite"></div>
    </div>
  );
}

export default App;
