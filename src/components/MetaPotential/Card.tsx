"use client"

import { FC } from "react"
import { isContext } from "vm"

interface CardProps {
    icon: JSX.Element
    title: string
    description: string
    color: string
}

const Card: FC<CardProps> = ({ icon, title, description, color }) => {
    return (
        <div className="flex flex-col">
            {/* <div className="mx-[20px] rounded-[25px] bg-white h-[100px] z-10 bg-opacity-25 relative"></div>
            <div className="mx-[14px] rounded-[25px] bg-gray-700 bg-opacity-25 mt-[14px]"></div>
            <div className="mx-[7px] rounded-[25px] bg-gray-600 bg-opacity-25 mt-[28px]"></div> */}
            <div className={`w-[384px] h-[600px] mt-[42px] relative `}>
                <div className={` h-[600px] py-[65px] relative rounded-[25px] px-[40px] z-10 ${color}`}>
                    {icon}
                    <div className="flex flex-col gap-[25px] relative z-10 my-[50px]">
                        <div className={`text-[28px] font-bold ${title === "AI and Machine Learning" ? "text-black" : "hero-text"}`}>{title}</div>
                        <div className={`text-[20px] font-medium ${title === "AI and Machine Learning" ? "text-black" : "text-white"}`}>{description}</div>
                    </div>
                </div>
                <div className="rounded-[25px] -top-[14px] bg-[#21212140] absolute w-[calc(100%-16px)] left-1/2 -translate-x-1/2 h-full "></div>
                <div className="rounded-[25px] -top-[28px] bg-[#1C1C1C] opacity-25 absolute w-[calc(100%-32px)] left-1/2 -translate-x-1/2 h-full "></div>
                <div className="rounded-[25px] -top-[42px] bg-[#141414] opacity-25 absolute w-[calc(100%-48px)] left-1/2 -translate-x-1/2 h-full "></div>
            </div>
        </div>
    )
}

export default Card;