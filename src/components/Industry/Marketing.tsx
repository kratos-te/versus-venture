/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react"

const Marketing: FC = () => {
    return (
        <div className="flex flex-col gap-[25px] relative bg-gradient-to-b from-[#262626] to-gray-900 border-x-[1px] border-main border-b-[1px] border-b-[#262626]  rounded-[25px] px-[47px] py-[120px] items-center max-lg:px-[20px] max-lg:py-[60px] max-lg:mt-7">
            <img src={"./svg/marketing.svg"} alt="real estate" className="absolute -top-14" />
            <div className="text-[36px] feature-text font-semibold max-lg:text-[25px]">Marketing</div>
            <div className="text-[20px] font-medium text-white text-center max-lg:text-[16px]">Discover a new dimension of advertising opportunities within our iconic virtual cityscapes. Join users who become brand ambassadors, creating a win-win relationship with companies</div>
        </div>
    )
}

export default Marketing;