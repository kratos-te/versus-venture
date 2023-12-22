"use client"
import { VALUE_ICON } from "@/config";
import { FC } from "react"
import ValueContext from "./ValueContent";

const Value: FC = () => {
    return (
        <div className="flex  border-y-[1px] border-[#808080] bg-[#0B0B0B] py-[75px] px-24">
            <div className="flex flex-col gap-[140px] w-max-[1440px]">
                <div className="vision-text text-[48px] font-bold">The Value We Create</div>
                <div className="grid w-full gap-[96px]" style={{
                    gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
                }}>
                    {VALUE_ICON.map((item, key) => (
                        <ValueContext key={key} icon={<item.icon />} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Value; 