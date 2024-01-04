"use client";

import { FC } from "react";

interface MakeCardProps {
    title: string;
    icon: JSX.Element;
    description: string;
}

const MakeCard: FC<MakeCardProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col rounded-[25px] gap-[35px] py-[50px] px-[30px] items-center text-center bg-gradient-to-t from-[#090808] to-gray-800 border-[1px] border-[#fff] max-lg:py-[30px] max-lg:px-[20px] max-lg:gap-[20px]">
            {icon}
            <div className="text-[28px] font-semibold text-white max-lg:text-[25px]">
                {title}
            </div>
            <div className="text-[20px] text-center font-rubik font-normal text-white max-lg:text-[20px]">
                {description}
            </div>
        </div>
    );
};

export default MakeCard;
