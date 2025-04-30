"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full xl:px-[calc(2%+2.8vw)] px-2  flex flex-col gap-4 bg-[#262626] pb-3 pt-4 lg:gap-6 lg:pt-12">
            <section className="w-full gap-6 lg:grid lg:grid-cols-2 lg:gap-32">
                <div className="col-span-full w-full lg:hidden flex flex-col items-center gap-2 lg:gap-3">
                    <div className="flex w-full justify-center gap-3">
                        <Link href={"#"}>{/* social media svg */}</Link>
                        <Link href={"#"}>{/* social media svg */}</Link>
                        <Link href={"#"}>{/* social media svg */}</Link>
                    </div>
                    <span className="text-sm leading-6 text-white lg:text-base">
                        ما را درشبکه های اجتماعی دنبال کنید!
                    </span>
                </div>
                <div className="hidden grid-cols-2 gap-6 lg:grid">
                    <div className="flex flex-col gap-8">
                        <span className="text-base font-bold text-primary-content">سایت برلن</span>
                        <div className="flex flex-col gap-4.5 lg:gap-3 lg:pr-2">
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                تماس با ما
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                درباره ما
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                حریم خصوصی
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <span className="text-base font-bold text-primary-content">خدمات مشتریان</span>
                        <div className="flex flex-col gap-4.5 lg:gap-3 lg:pr-2">
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                پرسش های متداول
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                راهنمای خرید و ارسال
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                حریم خصوصی
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                شرایط مرجوعی
                            </Link>
                            <Link
                                href="#"
                                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                            >
                                ارتباط با پشتیبانی
                            </Link>
                        </div>
                    </div>
                </div>
                {/* 3333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
                <div className="my-6 flex w-full flex-col lg:hidden"></div>
                {/* 3333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
                <div className="col-span-full flex h-full flex-col justify-center gap-6 lg:col-span-1">
                    <div className="hidden lg:flex flex-col items-center gap-2 lg:gap-3">
                        <div className="flex w-full justify-center gap-3">
                            <Link href={"#"}>{/* social media svg */}</Link>
                            <Link href={"#"}>{/* social media svg */}</Link>
                            <Link href={"#"}>{/* social media svg */}</Link>
                        </div>
                        <span className="text-sm leading-6 text-primary-content lg:text-base">
                            ما را در شبکه های اجتماعی دنبال کنید!
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2">
                        <span className="text-xs text-[#D4D4D4] lg:text-sm">
                            هفت روز هفته، از ساعت 8 الی 24 پاسخگوی سوالات شما هستیم.
                        </span>
                        <a
                            className="text-xs text-[#D4D4D4] lg:text-sm"
                            data-sentry-element="Link"
                            data-sentry-source-file="support-details.tsx"
                            href="tel:02191200500"
                        >
                            تلفن: 02191200500
                        </a>
                    </div>
                </div>
            </section>
            <div className="flex w-full justify-center gap-6">
                <div className="rounded bg-primary-content px-0.5 py-1 lg:px-1"></div>
                <Link href={"#"} className="rounded bg-primary-content px-0.5 py-0.5 lg:px-1">
                    <Image
                        src={"/zarinpal.png"}
                        width={100}
                        height={100}
                        alt="zarinpal"
                        className="h-14 w-10 cursor-pointer object-contain lg:h-16 lg:w-[45px]"
                    />
                </Link>
                <div className="rounded bg-primary-content px-0.5 py-1 lg:px-1"></div>
            </div>
            <div className="w-full text-center text-small text-[#D4D4D4] lg:text-regular lg:text-[#A3A3A3]">
                کلیه حقوق این سایت متعلق به فروشگاه آنلاین برلن شاپ می باشد.
            </div>
        </footer>
    );
};

export default Footer;
