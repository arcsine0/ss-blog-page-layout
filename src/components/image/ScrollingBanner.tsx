import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'

import { ImageSet } from '../../lib/utils'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { GatsbyImage } from 'gatsby-plugin-image'

export interface ScrollingBannerProps {
    images: ImageSet[]
    width?: number
    height?: number
    autoplay?: boolean
}

const ScrollingBanner: React.FunctionComponent<ScrollingBannerProps> = ({ images, width = 'auto', height = 'auto', autoplay = true }) => {
    return (
        <section className='w-full flex flex-row justify-center items-center'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={2}
                spaceBetween={25}
                centeredSlides={true}
                loop={true}
                autoplay={autoplay ? true : {
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true
                }}
            >
                {images.map((image, index) => (
                    image.image && (
                        <SwiperSlide
                            key={index}
                            className='flex'
                            style={{
                                width: width, 
                                height: height
                            }}
                        >
                            <GatsbyImage
                                image={image.image}
                                alt='slider image'
                                className='w-full h-full object-center'
                            />
                        </SwiperSlide>
                    )
                ))}
            </Swiper>
        </section>
    )
}

export default ScrollingBanner