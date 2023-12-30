"use client"
import { FC, useState } from "react"
import { PlusIcon } from "./SVGIcon";

interface FooterProps {
    title: string;

}

const FooterLink: FC<FooterProps> = ({ title }) => {
    const [isDrops, setIsDrops] = useState(false)

    const handleOpenDrops = () => {
        setIsDrops(!isDrops)
    }
    return (
        <>
            <div className="flex flex-col gap-[35px] max-lg:hidden">
                <div className="text-[32px] font-bold text-white">{title}</div>
                <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                <div className="t text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
            </div>

            <div className="flex items-center  justify-between w-full border-b-[1px] border-[#808080] pb-[20px] lg:hidden">
                <div className="text-[28px] font-bold text-white">{title}</div>
                <div onClick={handleOpenDrops}>
                    <PlusIcon />
                </div>

            </div>
            {isDrops && (
                <div className="flex flex-col gap-[25px] w-full justify-start">
                    <div className=" text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                    <div className="text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                    <div className=" text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                    <div className="text-2xl font-normal text-[#FFFFFFBF]">introduction</div>
                </div>
            )}


        </>
    )
}

export default FooterLink;