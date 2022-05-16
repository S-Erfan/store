import React from 'react';

// import Swiper core and required modules
import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import '../styles/Baner.css';
import { Link } from 'react-router-dom';



const Baner = () => {
    return (
        <div>
            <Swiper
                    effect={'fade'}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true} 
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Mousewheel, Autoplay, EffectFade]}
                    className="mySwiper"
            >
                <SwiperSlide className='image-slider1'>
                    <div className="showcase">
                        <h1>Apple's new collection</h1>
                        <Link to='/'> See Products </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='image-slider2'>
                    <div className="showcase">
                        <h1>new Blogs</h1>
                        <Link to='/'> See Blogs </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='image-slider3'>
                    <div className="showcase">
                        <h1>easy Buy</h1>
                        <Link to='/'>Lets Buy</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='image-slider4'>
                    <div className="showcase">
                        <h1>Samsung's new collection</h1>
                        <Link to='/'> See Products </Link>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>

        </div>
    );
};

export default Baner;