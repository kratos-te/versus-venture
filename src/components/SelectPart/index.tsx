/* eslint-disable @next/next/no-img-element */
"use client";

import { SELECT_ICON } from "@/config";
import { FC } from "react";

const SelectPart: FC = () => {
    return (
        <div className="flex px-24 justify-center max-lg:px-12">
            <div className="flex  max-w-[1440px] justify-between rounded-[25px] border-[1px] border-[#808080] px-12 py-9 bg-[#3A3A3A40] object-cover w-full max-xl:px-4 max-lg:flex max-lg:flex-col max-lg:gap-[20px] max-lg:py-[20px]">
                {SELECT_ICON.map((item, key) => (
                    <div
                        key={key}
                        className={`flex justify-center w-1/3 items-center gap-[30px] max-xl:gap-[16px] max-lg:hidden${item.title === "Scalable"
                            ? " border-x-[3px] border-main "
                            : ""
                            }`}
                    >
                        <img src={item.icon} alt="selected icon" />
                        <div className=" font-rubik text-white text-[20px] font-semibold max-xl:text-[20px]">
                            {item.title}{" "}
                        </div>
                    </div>
                ))}
                {SELECT_ICON.map((item, key) => (
                    <div
                        key={key}
                        className={`flex gap-[20px] items-center lg:hidden${item.title === "Scalable"
                            ? " border-y-[3px] border-main py-[10px]"
                            : ""
                            }`}
                    >
                        <img src={item.icon} alt="selected icon" />
                        <div className="w-1/3 font-rubik text-white text-[20px] font-semibold max-xl:text-[20px]">
                            {item.title}{" "}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPart;
