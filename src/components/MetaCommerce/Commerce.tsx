"use client"

import { FC } from "react"

interface CommerceProps {
    title: string
    icon: JSX.Element
    description: string
}

const Commerce: FC<CommerceProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col gap-[65px] max-lg:hidden">
                {icon}
                <div className="flex flex-col gap-[25px]">
                    <div className="text-[28px] font-bold hero-text">{title}</div>
                    <div className="text-[20px] font-medium text-white">{description}</div>
                </div>
            </div>
            <div className="flex flex-col gap-[65px] lg:hidden">
                <div className="flex gap-[50px]">
                    {icon}
                    <div className="text-[28px] font-bold hero-text">{title}</div>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <div className="text-[20px] font-medium text-white">{description}</div>
                </div>
            </div>
        </>
    )
}

export default Commerce