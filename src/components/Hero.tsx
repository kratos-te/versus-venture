/* eslint-disable @next/next/no-img-element */
"use client"
import { FC } from "react"
import { HeroBack, LightArrow, Underline } from "./SVGIcon"
import Button from "./Button"
import Image from "next/image"

const Hero: FC = () => {
    return (
        <div className="flex px-24">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto pt-[300px] mb-[200px]">
                <img src={"./svg/hero.svg"} className="absolute left-0 -top-16 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="vision" />
                <div className="flex flex-col gap-[50px] w-1/2">
                    <div className="flex flex-col gap-[25px]">
                        <div className="text-[20px] font-medium text-white">
                            Introducing Quantum Blockchain
                        </div>
                        <Underline />
                    </div>
                    <div className="text-[58px] font-black hero-text">Versus Blockchain Power in Your Hands</div>
                    <div className="text-2xl font-medium text-white">We lead the way into an ethical and decentralized future, where innovation intertwines with principles. Here, your voice is the driving force behind progress </div>
                    <div className="flex gap-[35px]">
                        <Button className="build-button px-20 py-5 text-2xl font-medium text-black" > Build </Button>
                        <Button className="flex gap-[15px] items-center py-5 bg-black text-white text-2xl font-medium"> Ecosystem <LightArrow /></Button>
                    </div>
                </div>
                <div className="flex w-1/2">
                    {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                    <Image src="/svg/golden.svg" width={750} height={550} alt="hero building" className="object-cover"></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero;