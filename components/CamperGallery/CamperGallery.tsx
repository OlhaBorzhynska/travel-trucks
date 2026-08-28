"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { CamperGalleryImage } from "@/types/camper";
import "swiper/css";
import "swiper/css/thumbs";
import css from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: CamperGalleryImage[];
}

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        spaceBetween={10}
        slidesPerView={1}
        className={css.mainSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.original}
              alt="Camper"
              width={638}
              height={505}
              className={css.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        spaceBetween={32}
        slidesPerView={4}
        className={css.thumbsSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.thumb}
              alt="Camper thumbnail"
              width={136}
              height={144}
              className={css.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
