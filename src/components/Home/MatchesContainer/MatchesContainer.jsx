import React from 'react';

import {
  Swiper,
  SwiperSlide,
} from 'framework7-react';

import Match from '../Match/Match.jsx'

import './MatchesContainer.css';

const MatchesContainer = (props) => (
  <Swiper className="matchSwiper" navigation autoplay loop params={{
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
      {props.users.map(u=> <SwiperSlide key={u.id}><Match user={u} /></SwiperSlide>)}
  </Swiper>
);

export default MatchesContainer;
