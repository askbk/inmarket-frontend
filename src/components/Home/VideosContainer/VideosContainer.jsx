import React from 'react';

import {
  Swiper,
  SwiperSlide
} from 'framework7-react';

import Video from '../Video/Video.jsx'

import './VideosContainer.css';

const VideosContainer = (props) => (
  <Swiper className="videoSwiper" navigation autoplay loop params={{
    autoplay: {
      delay: 6000
    },
    loop: {
      loopedSlides: 5
    },
    speed:500,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}}>
      {props.users.map(u=> <SwiperSlide key={u.id}><Video user={u} /></SwiperSlide>)}
  </Swiper>
);

export default VideosContainer;
