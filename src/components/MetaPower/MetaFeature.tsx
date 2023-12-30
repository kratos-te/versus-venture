/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from "react"

interface MetaFeatureProps {
    title: string
    icon: JSX.Element
    description: string
}

const MetaFeature: FC<MetaFeatureProps> = ({ title, icon, description }) => {
    return (
        <div className="flex  items-center rounded-[25px] 
        feature-pad border-[1px] border-main px-[84px] py-[78px] max-lg:flex max-lg:flex-col max-lg:gap-[35px] max-lg:px-[40px] max-lg:py-[30px]">
            <div className="flex gap-[35px] items-center w-2/5 max-lg:w-full max-lg:justify-center">
                {icon}
                <div className="text-[32px] font-bold feature-text">{title}</div>
            </div>
            <div className="text-[20px] font-medium text-white w-3/5 max-lg:w-full max-lg:text-center">{description}</div>
        </div>
    )
}

export default MetaFeature