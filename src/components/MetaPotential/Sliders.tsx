import { SLIDER } from '@/config';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Card from './Card';
import { NextIcon, PrevIcon } from '../SVGIcon';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Sliders: FC = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    const [distance, setDistance] = useState(0);

    const onPrev = () => {
        let d = distance;
        d = d - 1;
        setDistance(d)
    }

    const onNext = () => {
        let d = distance;
        d = d + 1;
        setDistance(d)
    }

    return (
        <div className='relative'>
            <div className='h-[630px] relative'>
                <div className='h-[600px] absolute flex gap-[60px] duration-200' style={{
                    transform: `translateX(-${distance * 400}px)`
                }}>
                    {SLIDER.map((item, key) => (
                        // <div className='w-[400px] h-[600px] border border-white text-white' key={key}>
                        //     {item.icon}
                        //     <h5>{item.title}</h5>
                        //     <p>{item.description}</p>
                        // </div>
                        <Card key={key} icon={<item.icon />} title={item.title} description={item.description} color={item.color} />
                    ))}
                </div>
                <div className='flex gap-[30px] items-center justify-center pt-[700px] '>
                    <button className='text-white' onClick={onPrev}><PrevIcon /></button>
                    <button className='text-white' onClick={onNext}><NextIcon /></button>
                </div>
            </div>
        </div >
    );
};

export default Sliders;
