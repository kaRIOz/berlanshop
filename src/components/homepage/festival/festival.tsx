"use client";
import React from "react";

// keen slider
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";

const Festival = () => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        rtl: true,
        mode: "free-snap",
        slides: { perView: "auto", spacing: 7 },
    });

    return (
        <section>
            <div className="flex w-full gap-1.5 bg-primary-main rounded-r py-3 pl-0 pr-2 lg:gap-2 lg:rounded lg:py-4 lg:pl-2">
                <div className="relative overflow-hidden">
                    <div className="group relative w-full">
                        <div ref={sliderRef} className="keen-slider [&>*:last-child]:pl-3">
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <div className="flex min-h-full min-w-[120px] flex-col items-center justify-between gap-3 py-1.5 lg:min-w-[180px] lg:px-7.5">
                                    <div>sfsadfsadfsdfsdf</div>
                                    <div>sdfsdfsdfsdf</div>
                                    <div>sdfsdfsdfsdf</div>
                                    <div>sdfsdfsdfsfsdf</div>
                                </div>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0"
                                style={{ maxWidth: 204, minWidth: 164 }}
                            >
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full w-full flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square w-35 lg:w-40 h-35 lg:h-40 mx-auto object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-[#171717]">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-[#171717]">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-[#171717]">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Festival;
