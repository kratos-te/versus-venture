"use client"

import { SELECT_ICON } from "@/config"
import { FC } from "react"

const SelectPart: FC = () => {
    return (
        <div className="flex justify-between rounded-[25px] border-[1px] border-[#808080] px-12 py-9 bg-[#3A3A3A40] mx-24">
            {SELECT_ICON.map((item, key) => (
                <div key={key} className="flex gap-[30px] items-center">
                    <item.icon />
                    <div className=" font-rubik text-white text-[28px] font-semibold">{item.title} </div>
                </div>
            ))}
        </div>
    )
}

export default SelectPart; 