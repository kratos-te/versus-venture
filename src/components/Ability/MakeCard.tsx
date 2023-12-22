"use client"

import { FC } from "react"

interface MakeCardProps {
    title: string;
    icon: JSX.Element
    description: string
}

const MakeCard: FC<MakeCardProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col rounded-[25px] gap-[35px] py-[50px] px-[30px] items-center text-center bg-gradient-to-t from-[#090808] to-gray-800 border-[1px] border-[#fff]">
            {icon}
            <div className="text-[32px] font-semibold text-white">{title}</div>
            <div className="text-[24px] text-center font-rubik font-normal text-white">{description}</div>
        </div>
    )
}

export default MakeCard