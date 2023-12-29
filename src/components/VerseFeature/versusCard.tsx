/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

interface CardType {
    selected?: boolean;
    icon: string;
    title: string;
    midTitle: string;
    content: string;
    position?: string;
}

const VersusCard: FC<CardType> = (
    { selected, icon, title, midTitle, content, position }
) => {
    return (
        <>
            <div className={`flex py-[94px] px-[64px] max-lg:hidden ${position === "left" ? 'flex-col' : 'flex-row items-center'} gap-[70px] rounded-[25px] border-2 border-[#1A1A1A] ${selected ? 'bg-[#1A1A1A]' : 'bg-[#111]'} backdrop-blur-md`}>
                <img src={icon} className="w-[150px] h-[150px]"></img>
                <div className="flex items-start justify-start flex-col gap-[35px]">
                    <h1 className="text-[#E4FC22] text-[30px] font-bold">{title}</h1>
                    <p className="text-[24px] text-[#808080] font-semibold">{midTitle}</p>
                    <p className="text-white font-semibold text-[24px]">{content}</p>
                </div>
            </div>
            <div className={`flex flex-col py-[62px] px-[42px]  lg:hidden  gap-[70px] rounded-[25px] border-2 border-[#1A1A1A] ${selected ? 'bg-[#1A1A1A]' : 'bg-[#111]'} backdrop-blur-md`}>
                <img src={icon} className="w-[98px] h-[98px]"></img>
                <div className="flex items-start justify-start flex-col gap-[35px]">
                    <h1 className="text-[#E4FC22] text-[21px] font-bold">{title}</h1>
                    <p className="text-[15px] text-[#808080] font-semibold">{midTitle}</p>
                    <p className="text-white font-semibold text-[15px]">{content}</p>
                </div>
            </div>
        </>
    );
};



export default VersusCard;
