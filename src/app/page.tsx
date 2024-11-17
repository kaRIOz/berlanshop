"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Sales from "@/components/sales/Sales";
import Newest from "@/components/newest/Newest";
import SearchVsCategory from "@/components/search-category/SearchVsCategory";
import Footer from "@/components/footer/footer";
import SignIn from "@/components/sign-in/SignIn";

export default function Home() {
    return (
        <section>
            <Swiper
                modules={[EffectCoverflow]}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 300,
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
            <div className="w-2/3 my-12 m-auto flex justify-between items-center">
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

            <Footer />
            <SignIn />
        </section>
    );
}
