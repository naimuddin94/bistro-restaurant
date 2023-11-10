import SectionTitle from "../utility/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "/assets/home/slide1.jpg";
import slide2 from "/assets/home/slide2.jpg";
import slide3 from "/assets/home/slide3.jpg";
import slide4 from "/assets/home/slide4.jpg";
import slide5 from "/assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderOnline = () => {
  return (
    <div className="my-20 max-w-5xl mx-auto">
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      ></SectionTitle>
          <Swiper
        
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-9"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
