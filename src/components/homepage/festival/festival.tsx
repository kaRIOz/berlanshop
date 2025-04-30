"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//icons
import { IconToman } from "@/components/icons/icons";
// keen slider
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Festival = () => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        rtl: true,
        mode: "free",
        slides: { perView: "auto", spacing: 7 },
    });

    return (
        <section>
            <div className="bg-primary-main flex gap-1.5 lg:gap-2 lg:pl-2 lg:py-4 lg:rounded pl-0 pr-2 py-3 rounded-r w-full">
                <div className="relative overflow-hidden">
                    <div className="group relative">
                        <div ref={sliderRef} className="keen-slider [&>*:last-child]:pl-3">
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <div className="flex min-h-full min-w-[120px] flex-col items-center justify-between gap-3 py-1.5 lg:min-w-[180px] lg:px-8 text-primary-content">
                                    <div>گنجینه بنفش</div>
                                    <div>sdfsdfsdfsdf</div>
                                    <div>بهترین حراج روزانه</div>
                                    <div>sdfsdfsdfsfsdf</div>
                                </div>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                <IconToman />
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="keen-slider__slide min-w-fit max-w-fit px-0">
                                {/* link tag */}
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-[#E5E5E5] bg-primary-content p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px]"
                                    style={{ maxWidth: 204, minWidth: 164 }}
                                >
                                    {/* for up tag : min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[204px] */}
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/Logo.png"}
                                            alt="logo"
                                            width={200}
                                            height={100}
                                            className="aspect-square mx-auto w-36 lg:w-40 h-36 lg:h-40 object-contain"
                                        />
                                        <h3 className="line-clamp-2 font-medium text-regular lg:text-medium text-hard-blue">
                                            برلن شاپ/برلن شاپ
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            <span className="text-[#737373] line-through">430.000</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-normal text-hard-blue">129.000</span>
                                                {/* svg */}
                                            </div>
                                        </div>
                                        <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                            70%
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <Link
                                href={"#"}
                                className="keen-slider__slide flex min-w-fit max-w-fit flex-col items-center justify-center text-primary-content"
                            >
                                svg
                                <h1>${"---->"}</h1>
                                <button className="relative flex items-center justify-center overflow-hidden rounded text-medium focus-visible:outline-none font-normal disabled:text-primary-shade-200 px-0 py-1.5 text-primary-content">
                                    <span>مشاهده همه </span>
                                </button>
                            </Link>
                        </div>
                        <span
                            className="absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-white opacity-50 lg:flex left-2.5 h-8 w-8 border border-gray-500"
                            data-sentry-component="Arrow"
                            data-sentry-source-file="arrow.tsx"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                data-sentry-element="svg"
                                data-sentry-component="SvgArrowSquareLeft"
                                data-sentry-source-file="ArrowSquareLeft.tsx"
                            >
                                <path
                                    fill="currentColor"
                                    d="M13.26 16.28c-.19 0-.38-.07-.53-.22L9.2 12.53a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3 3 3 3c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
                                    data-sentry-element="path"
                                    data-sentry-source-file="ArrowSquareLeft.tsx"
                                ></path>
                            </svg>
                        </span>
                        <span
                            className="absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-white opacity-50 lg:flex right-2.5 h-8 w-8 border border-gray-500"
                            data-sentry-component="Arrow"
                            data-sentry-source-file="arrow.tsx"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                data-sentry-element="svg"
                                data-sentry-component="SvgArrowSquareRight"
                                data-sentry-source-file="ArrowSquareRight.tsx"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22"
                                    data-sentry-element="path"
                                    data-sentry-source-file="ArrowSquareRight.tsx"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Festival;
