import React from 'react';
import './Facts.scss';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Navigation]);

const Facts = ({title, slides}) => {
    const cards = slides.map((el, index) => 
        <SwiperSlide className="facts-slide" key={index}>
            <img className='facts-slide-img' src={el.image} alt={el.description}/>
            <p className='facts-slide-paragraph'>{el.description}</p>
            <p className="facts-slide-key">{el.id}</p>
        </SwiperSlide>);
    return(
        <section className='facts container'>
            <h2 className='facts-title'> { title }</h2>
            <div className="swiper-button-prev"/>
            <Swiper
                pagination={{
                    el: '.facts-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="facts-pagination-bullet ${className}"></span>`
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                spaceBetween={40}
                slidesPerView={3}
                slidesPerGroup={3}>
                {cards}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>
        </section>
    )
}

export default Facts;