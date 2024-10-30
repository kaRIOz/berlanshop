"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Home() {
    return (
        <main className="bg-red-200 flex w-11/12 m-auto h-screen justify-center items-center">
            <Swiper
                modules={[EffectCoverflow]}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 200,
                    depth: 200,
                    modifier: 0.5,
                    slideShadows: false,
                }}
                loop={true}
                slidesPerView={5}
                centeredSlides={true}
                direction="horizontal"
                grabCursor={true}
            >
                {Array.from({ length: 5 }, (_, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive, isNext, isPrev }) => (
                            <Image
                                className={`${isActive ? "opacity-100" : isNext || isPrev ? "opacity-70" : "opacity-30"} overflow-hidden  transition-all duration-500 ease-in-out`}
                                width={250}
                                height={400}
                                src="/test.png"
                                alt=""
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}
