import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Styles/Swiper.css";

export default function ProjectCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="swiper"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`screenshot ${idx + 1}`}
            loading="lazy"
            className="ProjectCarousel"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
