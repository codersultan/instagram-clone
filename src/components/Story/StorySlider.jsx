import SingleStory from "./SingleStory";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const StorySlider = () => {
  return (
    <>
      <div className="story-slider">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleStory
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              name="edolydl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default StorySlider;
