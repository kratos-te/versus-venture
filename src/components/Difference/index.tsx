"use client"

import { FC } from "react"
import { Sunrise } from "../SVGIcon"

const Difference: FC = () => {
    return (
        <div className="flex py-[86px] px-24 bg-black border-y-[1px] border-[#3A3A3A] relative max-mv:px-[170px] max-mv:py-0 max-md:px-[50px]">
            <div className="flex max-w-[1440px] mx-auto relative max-mv:hidden">
                <div className="flex flex-col gap-[35px] w-1/2 max-lg:w-full">
                    <div className="text-[48px] vision-text font-cairo font-bold">We Make Difference</div>
                    <div className="text-[24px] font-rubik font-normal text-white">We are ready to revolutionize current systems and lead a global transition to a new decentralized technological-financial standard</div>
                </div>
                <div className=" absolute right-0 -bottom-[85px] max-lg:hidden">
                    <Sunrise />
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center mt-[50px] mv:hidden">
                <div className="flex flex-col gap-[15px] z-50">
                    <div className="text-[32px] vision-text font-cairo font-bold text-center">We Make Difference</div>
                    <div className="text-[16px] font-rubik font-normal text-white text-center">We are ready to revolutionize current systems and lead a global transition to a new decentralized technological-financial standard</div>
                </div>
                <div className="">
                    <Sunrise className="max-md:w-[250px] max-md:h-[200px]" />
                </div>
            </div>
        </div>
    )
}

export default Difference;