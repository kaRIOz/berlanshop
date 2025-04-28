"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// keen slider
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// icons
import { TbTruckDelivery, TbCreditCardPay } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { GiBackup } from "react-icons/gi";
import Link from "next/link";

const Banner = () => {
    const [details, setDetails] = React.useState<TrackDetails | null>(null);
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            initial: 2,
            created(s) {
                setDetails(s.track.details);
            },
            updated(s) {
                setDetails(s.track.details);
            },
            detailsChanged(s) {
                setDetails(s.track.details);
            },

            defaultAnimation: {
                duration: 2000,
                easing: t => 1 - Math.pow(1 - t, 3),
            },
            slides: { origin: "center" },
            breakpoints: {
                "(min-width: 348px)": {
                    slides: {
                        spacing: -70, // برای دسکتاپ
                    },
                },
                "(min-width: 1200px)": {
                    slides: {
                        spacing: -110, // برای دسکتاپ
                    },
                },
            },
        },

        [
            slider => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearPrevTimeout() {
                    clearTimeout(timeout);
                }
                function prevTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.prev();
                    }, 4000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearPrevTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        prevTimeout();
                    });
                    prevTimeout();
                });
                slider.on("dragStarted", clearPrevTimeout);
                slider.on("animationEnded", prevTimeout);
                slider.on("updated", prevTimeout);
            },
        ],
    );

    function scaleStyle(idx: number) {
        if (!details) return {};

        const currentSlide = details.rel;

        const distance = Math.abs(currentSlide - idx);

        let scale = 0.9;

        if (distance === 0) {
            scale = 1;
        } else {
            scale = 0.9;
        }

        return {
            transform: `scaleY(${scale})`,
            WebkitTransform: `scaleY(${scale})`,
            transition: "transform 0.4s ease",
        };
    }

    const images = ["/imgBanner1.webp", "/imgBanner2.webp", "/imgBanner3.webp"];

    return (
        <div className="w-full overflow-hidden">
            <div className="h-[calc(100vw/1.2-2.5px)] min-h-[300px] md:h-[calc((80vw/71)*24-2.5px)] lg:min-h-[460px]">
                <div ref={sliderRef} className="keen-slider">
                    {images.map((src, idx) => (
                        <div key={idx} className="keen-slider__slide">
                            <div className="scale-y-90" style={scaleStyle(idx)}>
                                {/* <Link href="#"> */}
                                <Image
                                    width={1200}
                                    height={356}
                                    src={src}
                                    alt={`Slide ${idx}`}
                                    className="w-[80%] md:w-[90%] h-full block mx-auto object-cover rounded"
                                />
                                {/* </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="homepage-container">
                <div className="mt-4 py-3  md:py-6 grid grid-cols-2 gap-y-3 md:gap-y-0 md:grid-cols-4">
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
        </div>
    );
};

export default Banner;
