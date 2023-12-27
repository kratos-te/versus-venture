/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { METAPOWER } from "@/config"
import { FC } from "react"
import MetaFeature from "./MetaFeature"

const MetaPower: FC = () => {
    return (
        <div className="flex py-[150px] px-24">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto mb-[200px] relative">
                <img src={"./svg/meta.svg"} className="absolute left-0 -top-16 pointer-events-none w-full flex-col items-center justify-center object-cover opacity-80 lg:opacity-100 z-0" alt="vision" />
                <div className="flex flex-col gap-[100px]">
                    <div className="flex flex-col gap-[50px] items-center px-[150px ]">
                        <div className="text-[40px] hero-text font-bold">The Power of the Metaverse</div>
                        <div className="text-[24px] font-semibold text-white text-center">
                            The Metaverse has captured the world's imagination, and at Versus, we believe it's much more than a fleeting trend. It's a powerful tool that can revolutionize industries and change the way we interact with technology
                        </div>
                    </div>
                    {METAPOWER.map((item, key) => (
                        <MetaFeature key={key} title={item.title} icon={<item.icon />} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MetaPower