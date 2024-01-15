/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";

interface ValueProps {
    title: string;
    icon: string;
    description: string;
}

const ValueContext: FC<ValueProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col gap-[30px] max-mv:hidden">
                <img src={icon} alt="mini icon" className="w-[100px] h-[100px]" />
                <div className="text-[36px] font-semibold text-[#FFD700]">
                    {title}
                </div>
                <div className="text-[20px] font-normal text-white">
                    {description}
                </div>
            </div>
            <div className="flex flex-col gap-[20px] px-[191px] mv:hidden">
                <div className="flex flex-col gap-[20px] items-center">
                    <img src={icon} alt="mini icon" className="w-[54px] h-[54px]" />
                    <div className="text-[20px] font-semibold text-[#FFD700]">
                        {title}
                    </div>
                </div>
                <div className="text-[16px] text-center font-normal text-white">
                    {description}
                </div>
            </div>
        </>
    );
};

export default ValueContext;
