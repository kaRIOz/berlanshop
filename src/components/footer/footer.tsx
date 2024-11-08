import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full  bg-slate-100 mt-36">
            <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 content-center">
                <div>
                    <h2 className="font-semibold text-2xl py-8">راه های ارتباطی</h2>
                    <ul className="pb-20 flex flex-col space-y-6">
                        <li>اینستاگرام</li>
                        <li>تلگرام</li>
                        <li>شماره تلفن:09121234567</li>
                        <li> ادرس : میدان امام خمینی ،خیابان فردوسی ،کوچه برلن ، پلاک 7</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-2xl py-8">نمادهای اطمینان</h2>
                    <Image
                        src="https://parspng.com/wp-content/uploads/2023/01/zarin-palpng.parspng.com_.png"
                        width={100}
                        height={100}
                        alt="zarinpal-logo"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
