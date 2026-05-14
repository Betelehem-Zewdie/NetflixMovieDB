import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import styles from "./SlideShow.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import PropTypes from "Prop-types"


function SlideShow({title,movies}) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default SlideShow