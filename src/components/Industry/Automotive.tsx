/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react"

const Automotive: FC = () => {
    return (
        <div className="flex flex-col gap-[25px] relative bg-gradient-to-b from-[#181818] to-transparent border-x-[1px] border-main border-b-[1px] border-b-[#262626] rounded-[25px]  px-[47px] py-[120px] items-center mt-14 max-lg:px-[20px] max-lg:py-[60px] max-lg:mt-7">
            <img src={"./svg/auto.svg"} alt="real estate" className="absolute -top-14" />
            <div className="text-[36px] feature-text font-semibold max-lg:text-[25px]">Automotive</div>
            <div className="text-[20px] font-medium text-white text-center max-lg:text-[16px]">Showcase properties with immersive 3D virtual tours, reaching buyers globally and reducing the need for physical visits</div>
        </div>
    )
}

export default Automotive;