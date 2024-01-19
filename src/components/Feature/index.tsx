"use client"

import { FEATURE } from "@/config"
import { FC } from "react"
import FeatureCard from "./FeatureCard"

const Feature: FC = () => {
    return (
        <div className="flex py-[150px] px-24 bg-[#0B0B0B] max-mv:px-[132px] max-md:px-[50px]">
            <div className="grid w-full gap-[116px] max-mv:hidden" style={{
                gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            }}>
                {FEATURE.map((item, key) => (
                    <FeatureCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
            <div className="grid w-full gap-[122px] max-md:gap-[50px] mv:hidden max-sm:hidden" style={{
                gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
            }}>
                {FEATURE.map((item, key) => (
                    <FeatureCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
            <div className="flex flex-col gap-[40px]  sm:hidden" >
                {FEATURE.map((item, key) => (
                    <FeatureCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default Feature