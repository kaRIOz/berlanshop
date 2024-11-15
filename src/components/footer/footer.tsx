import React from "react";
import Image from "next/image";

import zarinpal from "../../../public/zarinpal.png";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="w-full mx-auto px-16 py-16 grid grid-cols-2 gap-y-4 md:gap-y-0   content-center  md:grid md:grid-cols-4 md:place-content-start  bg-[#f5f5f3]">
            <div>
                <h3 className="mb-8 font-medium">خرید از برلن شاپ</h3>
                <ul className="flex flex-col space-y-3 relative">
                    <li className="footer-li">خرید شال</li>
                    <li className="footer-li">خرید روسری</li>
                    <li className="footer-li">خرید مقنعه</li>
                    <li className="footer-li">خرید توربان</li>
                </ul>
            </div>
            <div>
                <h3 className="mb-8 font-medium">خدمات مشتریان</h3>
                <ul className="flex flex-col space-y-3 relative">
                    <li className="footer-li">پرسش های متدوال</li>
                    <li className="footer-li">راهنمای خرید</li>
                    <li className="footer-li">شرایط بازگشت</li>
                    <li className="footer-li">قوانین و مقررات</li>
                </ul>
            </div>
            <div>
                <h3 className="mb-8 font-medium">ارتباط با ما</h3>
                <ul className="flex flex-col space-y-3 relative">
                    <li className="footer-li">تلفن : 7786423</li>
                    <li className="footer-li">ایمیل :berlanshop@gmail.com</li>
                    <li className="footer-li">
                        <IoLogoInstagram className="text-2xl" />
                    </li>
                    <li className="footer-li">
                        <PiTelegramLogo className="text-2xl" />
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-8 font-medium">نمادهای اطمینان</h3>
                <ul className="flex flex-col space-y-3 relative">
                    <Image src={zarinpal} alt="zarinpal" width={100} />
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
