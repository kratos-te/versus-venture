"use client"

import { FC } from "react"

interface PillarProps {
    title: string
    icon: JSX.Element
    description: string
}

const Pillar: FC<PillarProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col gap-[130px] rounded-[25px] bg-gradient-to-b from-[#0F0F0F] to-transparent backdrop-filter backdrop-blur-sm border-[1px] border-[#808080] px-[46px] py-[77px] max-lg:hidden">
                {icon}
                <div className="flex flex-col gap-[25px]">
                    <div className="text-[32px] font-bold feature-text">{title}</div>
                    <div className="text-[20px] font-semibold text-white">{description}</div>

                </div>
            </div>
            <div className="flex flex-col gap-[130px] rounded-[25px] bg-gradient-to-b from-[#0F0F0F] to-transparent backdrop-filter backdrop-blur-sm border-[1px] border-[#808080] px-[40px] py-[69px] lg:hidden">
                {icon}
                <div className="flex flex-col gap-[20px]">
                    <div className="text-[28px] font-bold feature-text">{title}</div>
                    <div className="text-17px] font-semibold text-white">{description}</div>

                </div>
            </div>
        </>
    )
}

export default Pillar