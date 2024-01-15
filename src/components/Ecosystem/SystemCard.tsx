"use client";

import { FC } from "react";
import Button from "../Button";
import { WhiteArrow } from "../SVGIcon";

interface EcosystemProps {
    title: string;
    description: string;
    link: string;
}

const SystemCard: FC<EcosystemProps> = ({ title, description, link }) => {
    return (
        <>
            <div className="rounded-[50px] px-[58px] py-[90px] bg-[#111] border-2 border-[#1A1A1A] max-mv:hidden">
                <div className="flex flex-col gap-[50px]">
                    <div className="text-[28px] font-bold feature-text">
                        {title}
                    </div>
                    <div className="text-[20px] font-medium text-white">
                        {description}
                    </div>
                    <Button className="flex items-center gap-[15px] text-[20px] font-semibold text-white bg-[#1A1A1A] px-[30px] py-[17px] w-fit absoulute bottom-0">
                        Learn more
                        <WhiteArrow />
                    </Button>
                </div>
            </div>
            <div className="rounded-[50px] px-[72px] py-[80px] bg-[#111] border-2 border-[#1A1A1A] mv:hidden">
                <div className="flex flex-col gap-[35px]">
                    <div className="text-[22px] font-bold feature-text">
                        {title}
                    </div>
                    <div className="text-[16px] font-medium text-white">
                        {description}
                    </div>
                    <Button className="flex items-center gap-[15px] text-[16px] font-semibold text-white bg-[#1A1A1A] px-[24px] py-[12px] w-fit absoulute bottom-0">
                        Learn more
                        <WhiteArrow />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SystemCard;
