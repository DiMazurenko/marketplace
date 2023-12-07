'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';

const ProductSlider = ({ images }) => {
	const [activeImage, setActiveImage] = useState(images[0]);

	return (
		<div>
			<div className="product-main-image">
				<img src={activeImage} alt={activeImage} className="w-full h-auto object-cover object-center" />
			</div>

			<Swiper
				modules={[Thumbs]}
				watchSlidesProgress
				slidesPerView={4}
				className="product-thumbs-swiper mt-4"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} onClick={() => setActiveImage(image)} className="cursor-pointer">
						<img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover object-center" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductSlider;
