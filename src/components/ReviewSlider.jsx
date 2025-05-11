import React from 'react';
import ReviewCard from './ReviewCard';
import { Scrollbar, A11y, Autoplay, Mousewheel, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReviewSlider = ({ reviews }) => {
    return (
        <div>
            <Swiper
                modules={[Scrollbar, A11y, Autoplay, Mousewheel, Thumbs]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                mousewheel={true}
                spaceBetween={20}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                >
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;