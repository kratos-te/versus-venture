"use client"
import { FC } from "react"

interface FooterProps {
    title: string;

}

const FooterLink: FC<FooterProps> = ({ title }) => {
    return (
        <div className="flex flex-col gap-[35px]">
            <div className="text-[32px] font-bold text-white">{title}</div>
            <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
            <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
            <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
            <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
        </div>
    )
}

export default FooterLink;