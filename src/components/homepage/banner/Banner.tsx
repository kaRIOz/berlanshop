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
                className="aspect-dynamic lg:aspect-auto max-w-[1550px]"
            >
                <SwiperSlide>
                    <Image className="w-full" src={"/imgBanner1.webp"} alt="imageBanner1" width={1550} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full" src={"/imgBanner3.webp"} alt="imageBanner2" width={1550} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full" src={"/imgBanner2.webp"} alt="imageBanner3" width={1550} height={100} />
                </SwiperSlide>
            </Swiper>
            <div className="w-full border-b">
                <div className="max-w-container mx-auto mt-4 py-3  md:py-6 grid grid-cols-2 gap-y-3 md:gap-y-0 md:grid-cols-4">
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
            </div>
        </>
    );
};

export default Banner;
