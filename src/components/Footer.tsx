"use client";
import { FOOTER_LINK, SOCIAL_LINK } from "@/config";
import { FC } from "react";
import FooterLink from "./FooterLInk";
import SocialLink from "./SocialLink";

const Footer: FC = () => {
    return (
        <div className="gap-[100px] px-24 max-lg:px-12">
            <div className="flex flex-col max-w-[1440px] mx-auto border-t-[1px] border-[#808080] max-lg:border-t-[0px]">
                <div className="flex justify-between items-center py-24 max-mv:hidden">
                    {FOOTER_LINK.map((item, key) => (
                        <FooterLink key={key} title={item.title} />
                    ))}
                </div>
                <div className="flex flex-col gap-[25px] items-center py-24 mv:hidden">
                    {FOOTER_LINK.map((item, key) => (
                        <FooterLink key={key} title={item.title} />
                    ))}
                </div>
                <div className="flex justify-between py-24 border-t-[1px] border-[#808080] max-lg:flex max-lg:flex-col max-lg:gap-[28px] max-lg:items-center max-lg:border-t-[0px]">
                    <div className="text-[32px] font-bold text-white uppercase max-lg:text-[28px]">
                        JOIN OUR GLOBAL COMMUNITY
                    </div>
                    <div className="flex gap-[50px] max-mv:gap-[30px]">
                        {SOCIAL_LINK.map((item, key) => (
                            <SocialLink
                                key={key}
                                icon={<item.icon />}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
