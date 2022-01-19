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
    <div className="flex">
      <div className="h-screen w-88px flex flex-col justify-start">
        {/* <div className="mt-[40px] text-center font-extrabold text-iconDColor text-xl underline underline-offset-2 decoration-2">
          D
        </div>
        <div className="text-center text-duidRed font-semibold text-xs">
          Duid
        </div> */}
        <div className="mt-[40px] h-fit grid justify-items-center">
          <DuidLogo />
        </div>
        <div className="mt-[120px] h-fit grid pl-2 justify-items-center">
          <HomeRouteLogo className="transition ease-in-out hover:scale-110" />
        </div>
        <div className="mt-[20px] h-fit grid pl-2 justify-items-center">
          <WalletLogo className="transition ease-in-out hover:scale-110" />
        </div>
        <div className="mt-[20px] h-fit grid pl-2 justify-items-center">
          <CalendarLogo className="transition ease-in-out hover:scale-110" />
        </div>
        <div className="mt-[20px] h-fit grid pl-2 justify-items-center">
          <StatsLogo className="transition ease-in-out hover:scale-110" />
        </div>
        <div className="mt-[20px] h-fit grid pl-2 justify-items-center">
          <MessagesLogo className="transition ease-in-out hover:scale-110" />
        </div>
        <div className="mt-[20px] h-fit grid pl-2 justify-items-center">
          <SettingsLogo className="transition ease-in-out hover:scale-110" />
        </div>
      </div>
      <div className="grow h-screen border-2 bg-creamyWhite"></div>
    </div>
  );
}

export default App;
