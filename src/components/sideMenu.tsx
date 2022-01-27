import React, { useState } from "react";

import { ReactComponent as DuidLogo } from "../assets/duidLogo.svg";
import { ReactComponent as HomeRouteLogo } from "../assets/homeRouteLogo.svg";
import { ReactComponent as WalletLogo } from "../assets/walletLogo.svg";
import { ReactComponent as CalendarLogo } from "../assets/calendarLogo.svg";
import { ReactComponent as StatsLogo } from "../assets/statsLogo.svg";
import { ReactComponent as MessagesLogo } from "../assets/messagesLogo.svg";
import { ReactComponent as SettingsLogo } from "../assets/settingsLogo.svg";

const SideMenu = () => {
  return (
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
  );
};

export default SideMenu;
