import React, { useContext } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//stylesheet
import styles from '../styles/TopPro.module.css'
import spinner from '../../image/Spinner-2.gif'

//components
import Product from './Product';

//context
import { ProductsContext } from '../../Context/ContextProducts';


const TopPro = () => {

    const products = useContext(ProductsContext);
    const TopProducts = products.filter(item => item.rating.rate >= 4); 

    return (
      <div className={styles.container}>
                <h1>Top Products Rating</h1>
                
                {
                  !TopProducts.length 
                  ? 
                    <>
                      <img className={styles.spinner} src={spinner} alt='loading' />
                      <h2>loading...</h2>
                    </>
                  :
                    <Swiper 
                      modules={[Navigation, Pagination, A11y]}
                      spaceBetween={80}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation = {true}
                      className="myTop"
                      breakpoints={{
                          576: {
                          //   width: 576,
                            slidesPerView: 2,
                          },
                          968: {
                          //   width: 968,
                            slidesPerView: 3,
                          },
                          1200: {
                          //   width: 1200,
                            slidesPerView: 4,
                          }
                        }}
                    >
                        {
                            TopProducts.map(item => 
                                    <SwiperSlide key={item.id} className='swiperSliderTop'>
                                        <Product productData={item}  /> 
                                    </SwiperSlide>
                        )}
                    </Swiper>

                }
            
            </div>
    );
};

export default TopPro;