"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

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
                    <Image src={"/imgBanner1.webp"} alt="imageBanner1" width={1550} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/imgBanner3.webp"} alt="imageBanner2" width={1550} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/imgBanner2.webp"} alt="imageBanner3" width={1550} height={100} />
                </SwiperSlide>
            </Swiper>
            <div className="w-full mt-4 pt-6 pb-8 grid grid-cols-2 md:grid-cols-4 border-b-[1px]">
                <div className="flex justify-center items-center space-x-3 space-x-reverse  text-hard-blue">
                    <TbTruckDelivery className="text-medium md:text-2xl" />
                    <p className="font-semibold text-regular md:text-sm">ارسال سریع</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse text-hard-blue">
                    <SiAdguard className="text-medium md:text-2xl" />
                    <p className="font-semibold text-regular md:text-sm">اصالت کالا</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse text-hard-blue">
                    <TbCreditCardPay className="text-medium md:text-2xl" />
                    <p className="font-semibold  text-regular md:text-sm">پرداخت امن</p>
                </div>
                <div className="flex justify-center items-center space-x-3 space-x-reverse text-hard-blue">
                    <GiBackup className="text-medium md:text-2xl" />
                    <p className="font-semibold  text-regular md:text-sm">پشتیبانی</p>
                </div>
            </div>
        </>
    );
};

export default Banner;
