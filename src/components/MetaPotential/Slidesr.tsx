import { FC, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return (
        <Slider {...settings}>
            {/* {AfroStyles.map((item) => (
                <div key={item.id}>
                    <div className="img-body">
                        <img src={item.src} alt={item.alt} />
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))} */}
        </Slider>
    );
};

export default Sliders;
