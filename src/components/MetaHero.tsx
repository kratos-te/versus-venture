/* eslint-disable @next/next/no-img-element */
"use client"
import { FC } from "react"
import Image from "next/image"
import Button from "./Button"

const MetaHero: FC = () => {
    return (
        <div className="flex px-24 border-b-[1px] border-main relative">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto pt-[300px] mb-[150px]">
                <img src={"./svg/metaversus.svg"} className="absolute left-0 top-30 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="vision" />
                <div className="flex flex-col gap-[50px] w-1/2">
                    <div className="flex flex-col gap-[25px]">
                        <div className="text-[20px] font-medium text-white">
                            Welcome to the MetaVersus
                        </div>
                    </div>
                    <div className="text-[58px] font-black hero-text leading-normal">Unlocking Infinite Realms of Imagination</div>
                    <div className="text-2xl font-medium text-white">Are you ready to transcend the limits of reality and embark on a journey into the MetaVersus? Step into a realm where imagination knows no bounds, and possibilities stretch beyond the horizon</div>
                    <div className="flex gap-[35px]">
                        <Button className="build-button px-20 py-5 text-2xl font-medium text-black" > Get Started </Button>
                    </div>
                </div>
                <div className="flex w-1/2">
                    {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                    <Image src="/img/metagirl.png" width={750} height={600} alt="hero building" className="absolute right-0 bottom-0 object-cover"></Image>
                </div>
            </div>
        </div >
    )
}

export default MetaHero;