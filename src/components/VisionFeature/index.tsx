/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import { Sunrise } from "../SVGIcon"

const VisionFeature: FC = () => {
    return (
        <div className="flex py-[150px] px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto mb-[200px] relative">
                <img src={"./svg/planet.svg"} className="absolute left-0 bottom-[600px] pointer-events-none w-full flex-col items-center justify-center object-cover opacity-80 lg:opacity-100 z-0" alt="vision" />
                <div className="flex flex-col gap-[150px] z-10">
                    <div className="flex justify-between">
                        <Sunrise className="max-lg:hidden" />
                        <div className="flex flex-col w-1/2 gap-[50px] max-lg:w-full">
                            <div className="text-[40px] font-black planet-text">Pioneers of a New Era</div>
                            <div className="text-[24px] font-medium text-white">
                                At Versus, we are the vanguards of a new era, a technological and innovative frontier that beckons us forward. Fearlessly, we forge ahead, breaking barriers, and shattering limitations. Our vision extends far beyond the horizon, stretching the limits of possibility and propelling humanity towards a brighter future
                            </div>
                            <div className="text-[24px] font-medium text-white">
                                We are the catalysts of progress, the architects of change, and the guiding light that illuminates the path towards a better world
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[50px] w-1/2 max-lg:w-full">
                            <div className="text-[40px] font-black planet-text">Empowering Humanity with Web3</div>
                            <div className="text-[24px] font-medium text-white">
                                In our quest for liberation, we have chosen to embrace the transformative power of Web3. It represents more than a mere technological shift; it embodies the very essence of decentralization, independence, transparency, and boundless freedom. We are the pioneers, tirelessly toiling to make Web3 ubiquitous, enhancing its potential with groundbreaking technologies and audacious ideas
                            </div>
                            <div className="text-[24px] font-medium text-white">
                                Our unwavering dedication is fueled by a profound belief in a world where every individual commands their privacy, where data and assets are safeguarded, and where trust is paramount
                            </div>
                        </div>
                        <img src={"./img/system.png"} className="absolute right-0 pointer-events-none w-full object-cover opacity-80 lg:opacity-100  max-lg:hidden" alt="system" />
                    </div>
                    <div className="text-[32px] px-[150px] text-center italic  font-extrabold planet-text">“We stand united, a formidable force, determined to revolutionize the world”</div>
                    <div className="flex gap-[30px] justify-between">
                        <img src={"./svg/building.svg"} className="pointer-events-none  object-cover opacity-80 lg:opacity-100  max-lg:hidden" alt="hero" />
                        <div className="flex flex-col w-1/2 gap-[50px] max-lg:w-full">
                            <div className="text-[40px] font-black planet-text">Meticulously Crafted, Infused with Passion</div>
                            <div className="text-[24px] font-medium text-white">
                                Every creation that bears the Versus name is meticulously crafted with an unwavering commitment to excellence. The flames of passion burn within us, infusing our every endeavor with an unstoppable drive to deliver nothing short of perfection. Our love for what we do radiates through every line of code, every pixel on the screen, and every interaction we facilitate
                            </div>
                            <div className="text-[24px] font-medium text-white">
                                Versus is not merely a platform; it is an embodiment of devotion, an oasis where innovation thrives and the pursuit of brilliance knows no bounds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VisionFeature