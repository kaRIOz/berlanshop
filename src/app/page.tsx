"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { TbTruckDelivery, TbCreditCardPay } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { GiBackup } from "react-icons/gi";

export default function Home() {
    return (
        <section>
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
                className="w-3/4"
            >
                {Array.from({ length: 5 }, (_, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive, isNext, isPrev }) => (
                            <Image
                                className={`${isActive ? "opacity-100" : isNext || isPrev ? "opacity-70" : "opacity-30"} overflow-hidden  transition-all duration-500 ease-in-out border-solid border-2 border-white mt-8`}
                                width={250}
                                height={350}
                                src="/test.png"
                                alt=""
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-2/3 mt-12 m-auto flex justify-between items-center">
                <div className="flex justify-center items-center space-x-3 space-x-reverse ">
                    <TbTruckDelivery className="text-2xl" />
                    <p className="font-semibold">ارسال سریع</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse">
                    <SiAdguard className="text-2xl" />
                    <p className="font-semibold">اصالت کالا</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse">
                    <TbCreditCardPay className="text-2xl" />
                    <p className="font-semibold">پرداخت امن</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse">
                    <GiBackup className="text-2xl" />
                    <p className="font-semibold">پشتیبانی</p>
                </div>
            </div>
        </section>
    );
}
