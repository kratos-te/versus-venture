"use client"

import { SELECT_ICON } from "@/config"
import { FC } from "react"

const SelectPart: FC = () => {
    return (
        <div className="flex px-24 justify-center">
            <div className="flex  max-w-[1440px] justify-between rounded-[25px] border-[1px] border-[#808080] px-12 py-9 bg-[#3A3A3A40] object-cover w-full">
                {SELECT_ICON.map((item, key) => (
                    <div key={key} className={`flex justify-center w-1/3 items-center gap-[30px]  ${item.title === "Scalable" ? " border-x-[3px] border-main " : ""}`}>
                        <item.icon />
                        <div className=" font-rubik text-white text-[28px] font-semibold">{item.title} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectPart; 