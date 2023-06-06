import React, { useState } from "react";
import classNames from "classnames";
import When from "../../../pages/When/When";
import Where from "../../../pages/Where/Where"
import Settings from '../../../pages/Settings/Settings'

function CampaignTop() {
  const tabs = [
    {
      label: "WHAT",
      component: When,
    },
    {
      label: "WHEN",
      component: When,
    },
    {
      label: "WHERE",
      component: Where,
    },
    {
      label: "SETTINGS",
      component: Settings,
    },
    {
      label: "HISTORY",
      component: When,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [CampaignOptions, setCampaigOptions] = useState('channel')
  const [option, setOption] = useState('channel')

  const handleClick = (tab) => {
    console.log(tab, 'keyyy');
    setActiveTab(tab);
  };

  const handleCampaign = (tab) => {
    setCampaigOptions(tab)
    setOption(tab)
  }

 

  const ActiveComponent = tabs.find((tab) => tab.label === activeTab).component;

  return (
    <div className="flex flex-col gap-[20px] py-10 px-16">
      <div>
        <div className="flex gap-[1px] ">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              name={tab.label}
              className={classNames(
                "w-[78px] h-[38px] font-lato text-[12px]  ",
                activeTab === tab.label
                  ? "bg-[#0C66D6] text-white rounded-sm duration-500"
                  : "bg-white duration-500 rounded-sm text-[#bdbdbd]"
              )}
              onClick={() => handleClick(tab.label)}
            >
              {tab.label}
            </button>
          ))}
          
          {activeTab == 'WHERE' &&
            <div className="flex flex-grow justify-end  mr-[200px] ">
              <p className="mt-[8px] text-[#bdbdbd] font-lato text-[14px]  mr-4">Where settings</p>
              <button className={classNames("w-[80px] h-[38px] font-lato text-[12px] ", CampaignOptions === 'channel' ?
                "bg-[#0C66D6] text-white rounded-sm duration-500 "
                : "bg-white duration-500 rounded-sm text-[#bdbdbd]"
              )} onClick={() => handleCampaign('channel')}>By Channels</button>
              <button className={classNames("w-[80px] h-[38px] font-lato text-[12px] ", CampaignOptions === 'tag' ?
                "bg-[#0C66D6] text-white rounded-sm duration-500"
                : "bg-white duration-500 rounded-sm text-[#bdbdbd]"
              )} onClick={() => handleCampaign('tag')}>By Tags</button>
            </div>
          }
         
        </div>
      </div>
      <div >
        <ActiveComponent props={option}/>
      </div>
    </div>
  );
}

export default CampaignTop;
