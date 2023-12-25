"use client"

import { IMPOSSIBLE } from "@/config";
import { FC } from "react"
import MakeCard from "./MakeCard";

const Impossible: FC = () => {
    return (
        <div className="flex flex-col gap-[82px]">
            <div className="flex items-center justify-center text-[48px] fragment-text font-bold">
                The impossible
            </div>
            <div className="grid w-full gap-[25px]" style={{
                gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            }}>
                {IMPOSSIBLE.map((item, key) => (
                    <MakeCard key={key} title={item.title} icon={<item.icon />} description={item.description}></MakeCard>
                ))}
            </div>
        </div>
    )
}

export default Impossible;