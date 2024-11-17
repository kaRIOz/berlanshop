"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import imgBanner1 from "../../../public/imgBanner1.webp";
import imgBanner2 from "../../../public/imgBanner2.webp";
import imgBanner3 from "../../../public/imgBanner3.webp";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// icons

import { TbTruckDelivery, TbCreditCardPay } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { GiBackup } from "react-icons/gi";

const Banner = () => {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className=""
            >
                <SwiperSlide>
                    <Image src={imgBanner1} alt="imageBanner1" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={imgBanner2} alt="imageBanner2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={imgBanner3} alt="imageBanner3" />
                </SwiperSlide>
            </Swiper>
            <div className="w-5/6 mt-4 py-6 pb-8 m-auto flex justify-between items-center border-b-[1px] max-w-container">
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
                    <p className="font-semibold font-vazir">پرداخت امن</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse">
                    <GiBackup className="text-2xl" />
                    <p className="font-semibold">پشتیبانی</p>
                </div>
            </div>
        </>
    );
};

export default Banner;
