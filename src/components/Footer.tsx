"use client";
import { FOOTER_LINK, SOCIAL_LINK } from "@/config";
import { FC } from "react"
import FooterLink from "./FooterLInk";
import SocialLink from "./SocialLink";

const Footer: FC = () => { 
    return (
        <div className="gap-[100px] px-24 ">
            <div className="flex flex-col max-w-[1440px] mx-auto border-t-[1px] border-[#808080]">

                <div className="flex justify-between items-center py-24 ">
                        {FOOTER_LINK.map((item, key) => (
                            <FooterLink key={key} title={item.title} />
                        ))}
                    </div>
                    <div className="flex justify-between   py-24 border-t-[1px] border-[#808080]">
                        <div className="text-[40px] font-bold text-white uppercase">JOIN OUR GLOBAL COMMUNITY</div>
                        <div className="flex gap-[50px]">
                            {SOCIAL_LINK.map((item, key) => (
                                <SocialLink key={key} icon={<item.icon />} link={item.link} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;