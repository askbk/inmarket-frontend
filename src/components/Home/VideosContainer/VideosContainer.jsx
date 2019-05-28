import React from 'react';

import { Swiper, SwiperSlide } from 'framework7-react';

import Video from '../Video/Video.jsx';

import './VideosContainer.css';

class VideosContainer extends React.Component {
    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        return (
            <Swiper
                className='videoSwiper'
                navigation
                autoplay
                params={{
                    autoplay: {
                        delay: 7000
                    },
                    speed: 900,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        }
                    }
                }}
            >
                {this.props.users.map(u => (
                    <SwiperSlide key={u.id}>
                        <Video user={u} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default VideosContainer;
