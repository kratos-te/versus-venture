"use client"

import { FC } from "react"
import Image from "next/image"

interface FragmentProps {
    title: string
    icon: string
    description: string
}
const FramgmentCard: FC<FragmentProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col rounded-[25px] gap-[75px] py-[102px] px-[58px] bg-gradient-to-t from-[#111] to-[#0B0B0B] border-[1px] border-[#3A3A3A] max-lg:py-[70px] max-lg:px-[40px]">
            <Image src={icon} alt="fragment" width={145} height={162} />
            <div className="flex flex-col gap-[25px]">
                <div className="flex text-[32px] font-rubik font-semibold text-white max-lg:text-[25px]">
                    {title}
                </div>
                <div className="flex text-[20px] font-rubik font-normal text-white max-lg:text-[16px]">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default FramgmentCard;