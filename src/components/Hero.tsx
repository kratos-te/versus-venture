/* eslint-disable @next/next/no-img-element */
"use client"
import { FC } from "react"
import { HeroBack, LightArrow, Underline } from "./SVGIcon"
import Button from "./Button"
import Image from "next/image"

const Hero: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto pt-[300px] mb-[200px]">
                <img src={"./svg/hero.svg"} className="absolute left-0 -top-16 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="vision" />
                <div className="flex flex-col gap-[50px] w-1/2 max-lg:w-full">
                    <div className="flex flex-col gap-[25px]">
                        <div className="text-[20px] font-medium text-white">
                            Introducing Quantum Blockchain
                        </div>
                        <Underline />
                    </div>
                    <div className="text-[58px] font-black hero-text max-lg:text-[40px]">Versus Blockchain Power in Your Hands</div>
                    <div className="text-2xl font-medium text-white max-lg:text-[20px]">We lead the way into an ethical and decentralized future, where innovation intertwines with principles. Here, your voice is the driving force behind progress </div>
                    <div className="flex gap-[35px] max-lg:gap-[20px]">
                        <Button className="build-button px-20 py-5 text-2xl font-medium text-black max-lg:px-10 max-lg:py-5 max-lg:text-[16px]" > Build </Button>
                        <Button className="flex gap-[15px] items-center py-5 bg-black text-white text-2xl font-medium max-lg:px-10 max-lg:py-5 max-lg:text-[16px]"> Ecosystem <LightArrow /></Button>
                    </div>
                </div>
                <div className="flex w-1/2 max-lg:hidden">
                    {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                    <Image src="/svg/golden.svg" width={750} height={550} alt="hero building" className="object-cover"></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero;