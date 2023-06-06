import React from "react";
import logo from "../../assets/Logo/logo.svg";
import DashboardIcon from "../../assets/Icon/Dashboard.svg";
import CampaignIcon from "../../assets/Icon/Campaigns.svg";
import CommandsIcon from "../../assets/Icon/Commands.svg";
import ZonesIcon from "../../assets/Icon/Zones.svg";
import ChannelsIcon from "../../assets/Icon/Zones.svg";
import DevicesIcon from "../../assets/Icon/Devices.svg";
import MediaIcon from "../../assets/Icon/MediaLibrary.svg";
import HistoryIcon from "../../assets/Icon/History.svg";
import SideIcon from "../../assets/Sidebar/Sidebar.svg";
import SideLeft from "../../assets/Sidebar/SideLeft.svg";

function Left() {
  return (
    <div className="bg-[#0B3366] text-[15px] relative flex flex-col pt-[20px] gap-[40px] w-[220px] h-full">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <ul className="text-white font-poppins  flex flex-col gap-2">
        <li className="bg-[#082a56] flex justify-center items-center">
          <div className="flex items-center w-[160px] py-2  gap-3 ">
            <i>
              <img src={DashboardIcon} alt="" />
            </i>
            <span className="">Dashboard</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={CampaignIcon} alt="" />
            </i>
            <span className="">Campaigns</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={CommandsIcon} alt="" />
            </i>
            <span className="">Commands</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={ZonesIcon} alt="" />
            </i>
            <span className="">Zones</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={ChannelsIcon} alt="" />
            </i>
            <span className="">Channels</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={DevicesIcon} alt="" />
            </i>
            <span className="">Devices</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={MediaIcon} alt="" />
            </i>
            <span className="">Media Library</span>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <div className="flex py-2 w-[160px] items-center gap-3 ">
            <i>
              <img src={HistoryIcon} alt="" />
            </i>
            <span className="">History</span>
          </div>
        </li>
      </ul>
      <div className="absolute right-0 top-80 ">
        <div className="relative">
          <img src={SideIcon} alt="" className="" />
          <div className="flex justify-center w-full">
            <img src={SideLeft} alt="" className="absolute top-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
