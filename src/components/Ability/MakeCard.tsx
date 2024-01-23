/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

interface MakeCardProps {
    title: string;
    icon: string;
    description: string;
}

const MakeCard: FC<MakeCardProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col rounded-[25px] gap-[35px] py-[50px] px-[30px] items-center text-center bg-gradient-to-t from-[#3A3A3A] to-[#111] border-[1px] border-[#fff] max-mv:hidden">
                <img src={icon} alt="card icon" />
                <div className="text-[28px] font-semibold text-white max-lg:text-[25px]">
                    {title}
                </div>
                <div className="text-[20px] text-center font-rubik font-normal text-white max-lg:text-[20px]">
                    {description}
                </div>
            </div>
            <div className="flex rounded-[25px] gap-[75px] py-[50px] px-[62px] items-center  bg-gradient-to-t from-[#3A3A3A] to-[#111] border-[1px] border-[#fff] mx-[142px] mv:hidden max-sm:hidden max-md:mx-[50px] max-md:px-[35px] max-md:py-[35px] max-md:gap-[30px]">
                <img src={icon} alt="card icon" className="w-[64px] max-md:w-[48px]" />
                <div className="flex flex-col gap-[25px] max-md:gap-[15px]">
                    <div className="text-[16px] font-semibold text-white ">
                        {title}
                    </div>
                    <div className="text-[14px]  font-rubik font-normal text-white ">
                        {description}
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-[25px] gap-[75px] py-[50px] px-[62px] items-center justify-center  bg-gradient-to-t from-[#3A3A3A] to-[#111] border-[1px] border-[#fff] mx-[142px] sm:hidden max-md:mx-[50px] max-md:px-[35px] max-md:py-[35px] max-md:gap-[30px]">
                <img src={icon} alt="card icon" className="w-[64px] max-md:w-[48px]" />
                <div className="flex flex-col items-center gap-[25px] max-md:gap-[15px]">
                    <div className="text-[16px] font-semibold text-white ">
                        {title}
                    </div>
                    <div className="text-[14px] text-center font-rubik font-normal text-white ">
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeCard;
