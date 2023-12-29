"use client"

import { FC } from "react"
import Button from "../Button"
import { WhiteArrow } from "../SVGIcon"

interface EcosystemProps {
    title: string
    description: string
    link: string
}

const SystemCard: FC<EcosystemProps> = ({ title, description, link }) => {
    return (
        <div className="rounded-[50px] px-[58px] py-[90px] bg-[#111] border-2 border-[#1A1A1A] max-lg:px-[40px] max-lg:py-[60px]">
            <div className="flex flex-col gap-[50px]">
                <div className="text-[32px] font-bold feature-text">{title}</div>
                <div className="text-[24px] font-medium text-white">{description}</div>
                <Button className="flex items-center gap-[15px] text-[24px] font-semibold text-white bg-[#1A1A1A] px-[30px] py-[17px] w-fit absoulute bottom-0">Learn more<WhiteArrow /></Button>
            </div>
        </div>
    )
}

export default SystemCard;