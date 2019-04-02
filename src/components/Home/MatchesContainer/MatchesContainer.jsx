import React from 'react';

import {
  Swiper,
  SwiperSlide,
} from 'framework7-react';

import Match from '../Match/Match.jsx'

import './MatchesContainer.css';

class MatchesContainer extends React.Component {
  componentDidMount() {
    this.forceUpdate()
  }

  render() {
    return (
      <Swiper className="matchSwiper" navigation autoplay params={{
        autoplay: {
          delay: 5000
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
          {this.props.users.map(u=> <SwiperSlide key={u.id}><Match user={u} /></SwiperSlide>)}
      </Swiper>
    )
  }
};

export default MatchesContainer;
