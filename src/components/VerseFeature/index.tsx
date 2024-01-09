/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import VersusCard from "./versusCard";
import { verseData } from "@/config";

const VerseFeature: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto mb-[100px] relative">
                <img
                    src={"./svg/explore.svg"}
                    className="absolute left-0 -top-20 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100"
                    alt="hero"
                />
                <div className="flex flex-col gap-[150px]">
                    <div className="text-center text-[40px] font-semibold text-white max-lg:text-[20px]">
                        We offer innovation, a unique experience with unique features we
                        created, all in a secure, decentralized environment where you and
                        your experience are at the center
                    </div>
                    <div className="flex flex-col gap-[100px]">
                        <div className=" text-center text-[40px] fragment-text font-bold uppercase">
                            Explore VERSE FEATURES
                        </div>
                        <div className="w-full flex gap-[17px] max-h-[3754px] max-lg:hidden">
                            <div className="w-[502px] flex flex-col gap-[24px]">
                                {verseData.filter((item) => item.position === 'left').map((data, key) => (
                                    <VersusCard
                                        icon={data.icon}
                                        title={data.title}
                                        midTitle={data.midTitle}
                                        content={data.content}
                                        position={data.position}
                                        selected={data.selected}
                                        key={key}
                                    />
                                ))}
                            </div>
                            <div className="w-[calc(100%-502px)] flex gap-[17px] flex-col">
                                {verseData.filter((item) => item.position === 'right').map((data, key) => (
                                    <VersusCard
                                        key={key}
                                        selected={data.selected}
                                        icon={data.icon}
                                        title={data.title}
                                        midTitle={data.midTitle}
                                        content={data.content}
                                        position={data.position}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid w-full gap-[19px] max-md:hidden lg:hidden" style={{
                            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                        }}>
                            {verseData.map((item, key) => (
                                <VersusCard key={key}
                                    icon={item.icon}
                                    title={item.title}
                                    midTitle={item.midTitle}
                                    content={item.content}
                                    position={item.position} />
                            ))}
                        </div>
                        {/* <div className="flex flex-col w-full gap-[19px] lg:hidden" >
                            {verseData.map((item, key) => (
                                <VersusCard key={key}
                                    icon={item.icon}
                                    title={item.title}
                                    midTitle={item.midTitle}
                                    content={item.content}
                                    position={item.position} />
                            ))}
                        </div> */}
                        {/* <div className="grid w-full gap-[70px]" style={{
                            gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
                        }}>
                            {VERSEPILLARS.map((item, key) => (
                                <Pillar key={key} title={item.title} description={item.description} icon={<item.icon />} />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerseFeature;


