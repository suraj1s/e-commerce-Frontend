"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type props = {
  tabsData: {
    label: JSX.Element;
    content: JSX.Element;
  }[];
  initial?: number;
};

const CustomTab = ({ tabsData, initial }: props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initial ?? 0);
  const tabsRef = useRef<any>([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    if (
      pathname === JSON.parse(localStorage.getItem("active-tab") || "{}")?.route
    ) {
      setActiveTabIndex(
        JSON.parse(localStorage.getItem("active-tab") || "{}")?.tab,
      );
    }
  }, [pathname]);

  return (
    <div>
      <div className="relative">
        <div className="flex w-full space-x-3 overflow-auto whitespace-nowrap border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={` text-[16px] font-medium leading-[40px]  ${
                  activeTabIndex === idx ? "text-gray-700" : "text-gray-400"
                }`}
                onClick={() => {
                  setActiveTabIndex(idx);
                  localStorage.setItem(
                    "active-tab",
                    JSON.stringify({
                      route: pathname,
                      tab: idx,
                    }),
                  );
                }}
              >
                {tab?.label}
              </button>
            );
          })}
        </div>
        <span
          className="dark:bg-dark-text absolute bottom-0 hidden h-[1.5px] bg-gray-700 transition-all duration-300 md:block"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="">
        <div>{tabsData[activeTabIndex]?.content}</div>
      </div>
    </div>
  );
};

export default CustomTab;
