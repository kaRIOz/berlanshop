"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

import { product } from "$/constants";
const Newest = () => {
    return (
        <>
            <h1 className="text-center mt-20 text-[2vw]">جدید ترین ها </h1>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                freeMode={true}
                loop={true}
                cssMode={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: -120,
                    },
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 160,
                    },
                    715: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1000: {
                        slidesPerView: 4,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="my-6 md:mb-20 md:mt-10"
            >
                {product.concat([...product, ...product]).map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-40 md:w-48 lg:w-56 hover:border-b-[1px] hover:border-b-slate-300 transition ease-in-out">
                            <Image
                                width={90}
                                height={180}
                                src="https://plus.unsplash.com/premium_photo-1663013729768-8fcfe4cda447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fHww"
                                alt={item.name}
                                className="object-cove w-full"
                            />
                            <div className="flex flex-col p-2">
                                <h2 className="font-medium">{item.name}</h2>
                                <p className="text-[10px] font-light text-gray-400">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <button className="text-[8px] md:text-[10px] bg-blue-500 p-2 rounded text-white">
                                        اضافه کردن به سبد خرید
                                    </button>
                                    <p className="text-[12px] md:text-[14px] lg:text-[16px]">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Newest;
