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
      <div className="post-content overflow-hidden ">
        {!slide && (
          <div className="media-content">
            <div className="content-slider">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper post-image"
              >
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rd-L1O08jT63q1yKavoQA200iJbxFbKzhg&s"
                    alt=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rd-L1O08jT63q1yKavoQA200iJbxFbKzhg&s"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rd-L1O08jT63q1yKavoQA200iJbxFbKzhg&s"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rd-L1O08jT63q1yKavoQA200iJbxFbKzhg&s"
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
