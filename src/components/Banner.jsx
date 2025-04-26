import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const images = [
    "https://iuh.edu.vn/Resource/Upload2/Image/2025/04/BANNER%2030_4_WEB1.jpg",
    "https://iuh.edu.vn/Resource/Upload2/Image/2024/12/banner%20web_fb%20te%CC%82%CC%81t%20dl2024-01.jpg",
    "https://iuh.edu.vn/Resource/Upload2/Image/2025/02/BANNER%20FB_WEB-01%20(1).jpg",
  ];

  return (
    <div className="w-full pl-100 pr-100">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
