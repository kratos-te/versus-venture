"use client";

import { FC } from "react";

interface FeatureProps {
    title: string;
    icon: JSX.Element;
    description: string;
}

const FeatureCard: FC<FeatureProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col gap-[25px]">
            {icon}
            <div className="text-[32px] font-rubik font-semibold text-white">
                {title}
            </div>
            <div className="text-[20px] font-rubik font-normal text-white">
                {description}
            </div>
        </div>
    );
};

export default FeatureCard;
