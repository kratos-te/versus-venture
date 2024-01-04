"use client";
import { FC } from "react";

interface ValueProps {
    title: string;
    icon: JSX.Element;
    description: string;
}

const ValueContext: FC<ValueProps> = ({ title, icon, description }) => {
    return (
        <>
            <div className="flex flex-col gap-[30px] max-lg:hidden">
                {icon}
                <div className="text-[36px] font-semibold text-[#FFD700]">
                    {title}
                </div>
                <div className="text-[20px] font-normal text-white">
                    {description}
                </div>
            </div>
            <div className="flex flex-col gap-[30px] lg:hidden">
                <div className="flex gap-[30px]">
                    {icon}
                    <div className="text-[30px] font-semibold text-[#FFD700]">
                        {title}
                    </div>
                </div>
                <div className="text-[20px] font-normal text-white">
                    {description}
                </div>
            </div>
        </>
    );
};

export default ValueContext;
