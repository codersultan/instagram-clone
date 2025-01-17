// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PostContent = () => {
  // State
  const [slide, setSlide] = useState(false);

  return (
    <>
      <div className="post-content rounded-[4px] overflow-hidden">
        {!slide && (
          <div className="media-content">
            <div className="content-slider">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostContent;
