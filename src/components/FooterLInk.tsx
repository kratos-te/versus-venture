"use client";
import { FC, useState } from "react";
import { PlusIcon } from "./SVGIcon";

interface FooterProps {
    title: string;
}

const FooterLink: FC<FooterProps> = ({ title }) => {
    const [isDrops, setIsDrops] = useState(false);

    const handleOpenDrops = () => {
        setIsDrops(!isDrops);
    };
    return (
        <>
            <div className="flex flex-col gap-[35px] max-mv:hidden">
                <div className="text-[24px] font-bold text-white">{title}</div>
                <div className="ttext-[20px] font-normal text-[#FFFFFFBF]">
                    introduction
                </div>
                <div className="ttext-[20px] font-normal text-[#FFFFFFBF]">
                    introduction
                </div>
                <div className="ttext-[20px] font-normal text-[#FFFFFFBF]">
                    introduction
                </div>
                <div className="t text-[20px] font-normal text-[#FFFFFFBF]">
                    introduction
                </div>
            </div>

            <div className="flex items-center  justify-between w-full border-b-[1px] border-[#808080] pb-[20px] mv:hidden">
                <div className="text-[16px] font-bold text-white">{title}</div>
                <div onClick={handleOpenDrops}>
                    <PlusIcon />
                </div>
            </div>
            {isDrops && (
                <div className="flex flex-col gap-[25px] w-full justify-start">
                    <div className=" text-[14px] font-normal text-[#FFFFFFBF]">
                        introduction
                    </div>
                    <div className="text-[14px] font-normal text-[#FFFFFFBF]">
                        introduction
                    </div>
                    <div className=" text-[14px] font-normal text-[#FFFFFFBF]">
                        introduction
                    </div>
                    <div className="text-[14px] font-normal text-[#FFFFFFBF]">
                        introduction
                    </div>
                </div>
            )}
        </>
    );
};

export default FooterLink;
