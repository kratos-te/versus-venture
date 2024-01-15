/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

interface FeatureProps {
    title: string;
    icon: string;
    description: string;
}

const FeatureCard: FC<FeatureProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col gap-[25px] max-mv:hidden">
                <img src={icon} alt="feature icon" className="w-[84px] h-[84px]" />
                <div className="text-[32px] font-rubik font-semibold text-white">
                    {title}
                </div>
                <div className="text-[20px] font-rubik font-normal text-white">
                    {description}
                </div>
            </div>
            <div className="flex flex-col gap-[25px] mv:hidden">
                <img src={icon} alt="feature icon" className="w-[45px] h-[45px]" />
                <div className="text-[20px] font-rubik font-semibold text-white">
                    {title}
                </div>
                <div className="text-[16px] font-rubik font-normal text-white">
                    {description}
                </div>
            </div>
        </>
    );
};

export default FeatureCard;
