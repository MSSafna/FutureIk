import React, { useState } from "react";
import classNames from "classnames";
import When from "../../../pages/When/When";

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
      component: When,
    },
    {
      label: "SETTINGS",
      component: When,
    },
    {
      label: "HISTORY",
      component: When,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveComponent = tabs.find((tab) => tab.label === activeTab).component;

  return (
    <div className="flex flex-col gap-[20px] py-10 px-16">
      <div>
        <div className="flex gap-[1px]">
          {tabs.map((tab) => (
            <button
              key={tab.label}
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
        </div>
        <div className="flex">
          <button className="w-[90px] h-[38px]">Basic</button>
          <button>Advanced</button>
        </div>
      </div>
      <div className="">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default CampaignTop;
