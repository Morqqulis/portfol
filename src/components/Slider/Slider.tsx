'use client';
// import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, EffectFade } from 'swiper/modules';

import '@node/swiper/swiper.scss';
const swiperParams: SwiperOptions = {
	modules: [Keyboard, EffectFade],
	slidesPerView: 3,
	spaceBetween: 20,
	height: 742,
	width: 550,
	speed: 1500,
	autoplay: {
		delay: 1500,
		disableOnInteraction: true,
	},
	loop: true,
	// grabCursor: true,
	centeredSlides: true,
	// effect: 'fade',
	direction: 'vertical',
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
};

import { register } from 'swiper/element/bundle';
import MyGist from '../MyGist/MyGist';
import gistData from '@/utils/GistData';
register();
const Slider = (): JSX.Element => {
	return (
		// <div className='max-h-[742px] max-w-3xl'>
		<Swiper className='overflow-hidden max-w-[550px] max-h-[750px] flex flex-col justify-between' {...swiperParams}>
			{gistData.map((gist) => (
				<SwiperSlide key={gist.id} className='min-h-[185px] group'>
					<MyGist
						className={'group-[.swiper-slide-active]:opacity-100 opacity-30 transition-all duration-500'}
						fileName={gist.fileName}
						gistUrl={gist.gistUrl}
					/>
				</SwiperSlide>
			))}
		</Swiper>
		// </div>
	);
};

export default Slider;
