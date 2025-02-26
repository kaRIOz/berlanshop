import React from "react";
import Header from "@/components/homepage/header/Header";

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="w-5/6 max-w-container mx-auto">
                <h1 className="my-10 text-hard-blue font-semibold"> برلن شاپ : جایی که زیبایی به روایت شماست</h1>

                <p className="opacity-55 leading-10">
                    ما در برلن شاپ بر این باوریم که هر روسری و شالی، داستانی برای گفتن دارد. داستانی از مد، زیبایی و
                    شخصیت شما. با ارائه طیف وسیعی از طرح‌ها و رنگ‌های متنوع، به شما کمک می‌کنیم تا استایل خود را تکمیل
                    کرده و در هر موقعیتی بدرخشید.
                    <br /> کیفیت بی‌نظیر: ما از بهترین پارچه‌ها و با بهره‌گیری از جدیدترین تکنیک‌های تولید، محصولاتی با
                    کیفیت بالا و دوام طولانی‌مدت ارائه می‌دهیم. <br />
                    تنوع بی‌کران: از طرح‌های کلاسیک و سنتی تا طرح‌های مدرن و امروزی، در برلن شاپ برای هر سلیقه‌ای
                    گزینه‌ای وجود دارد. تیم حرفه‌ای: تیم ما با سال‌ها تجربه در حوزه مد و نساجی، همواره به دنبال خلق
                    طرح‌های جدید و نوآورانه است. <br /> مشتری‌مداری: رضایت مشتری برای ما در اولویت است. ما به شما کمک
                    می‌کنیم تا بهترین انتخاب را داشته باشید و از خرید خود لذت ببرید.
                </p>
            </section>
        </>
    );
};

export default AboutUs;
