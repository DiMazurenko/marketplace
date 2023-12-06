'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PhotoSlider = ({ images }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			autoplay={{ delay: 2500 }}
			pagination={{ clickable: true }}
			navigation={true}
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<img src={image} alt={`Slide ${index}`} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default PhotoSlider;