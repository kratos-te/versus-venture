"use client"

import { FEATURE } from "@/config"
import { FC } from "react"
import FeatureCard from "./FeatureCard"

const Feature: FC = () => {
    return (
        <div className="flex py-[150px] px-24 bg-[#0B0B0B]">
            <div className="grid w-full gap-[116px]" style={{
                gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            }}>
                {FEATURE.map((item, key) => (
                    <FeatureCard key={key} title={item.title} icon={<item.icon />} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default Feature