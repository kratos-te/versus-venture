"use client"
import { FC } from "react"
import { HeroBack, Underline } from "./SVGIcon"

const Hero: FC = () => {
    return (
        <div className="flex justify-between px-24 pt-[300px]">
            <img src={"./svg/hero.svg"} className="absolute left-0 -top-16 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="hero" />
            <div className="flex flex-col gap-[50px] pr-10">
                <div className="flex  flex-col gap-[25px]">
                    <div className="text-[20px] font-medium">
                        Introducing Quantum Blockchain
                    </div>
                    <Underline />
                </div>
                <div className="text-[58px] font-black gradient-text">Versus Blockchain Power in Your Hands</div>
                <div className="text-2xl font-medium text-white">We lead the way into an ethical and decentralized future, where innovation intertwines with principles. Here, your voice is the driving force behind progress </div>
                <div className="flex gap-[35px]">
                    <div className="rounded-[100px] bg-gradient-to-r from-yellow-300 to-green-200 px-20 py-5 text-2xl font-medium text-black"> Build</div>
                    <div className="rounded-[100px] bg-gradient-to-r from-yellow-300 to-green-200 px-20 py-5 text-2xl font-medium text-black"> Ecosystem</div>
                </div>

            </div>
            <div className="flex w-1/2">
                <img src="./img/golden.png" alt="hero building" ></img>
            </div>
        </div>
    )
}

export default Hero;