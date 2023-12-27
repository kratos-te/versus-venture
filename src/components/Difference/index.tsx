"use client"

import { FC } from "react"
import { Sunrise } from "../SVGIcon"

const Difference: FC = () => {
    return (
        <div className="flex py-[86px] px-24 bg-black border-y-[1px] border-[#3A3A3A] relative ">
            <div className="flex max-w-[1440px] mx-auto relative">
                <div className="flex flex-col gap-[35px] w-1/2">
                    <div className="text-[48px] vision-text font-cairo font-bold">We Make Difference</div>
                    <div className="text-[24px] font-rubik font-normal text-white">We are ready to revolutionize current systems and lead a global transition to a new decentralized technological-financial standard</div>
                </div>
                <div className=" absolute right-0 -bottom-[85px] ">
                    <Sunrise />
                </div>
            </div>
        </div>
    )
}

export default Difference;