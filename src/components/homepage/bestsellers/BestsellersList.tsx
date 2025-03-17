"use client";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const BestsellersList = ({ newestProducts }) => {
    const container = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(container.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: "top-=350px top+=50%",
                end: "top-=200px",
            },
            opacity: 0,
            y: -30,
        });

        const marquee = marqueeRef.current;
        const items = marquee?.children;

        console.log(items);

        if (!items || items.length === 0) {
            console.warn("No children found in marquee");
            return;
        }
        // Duplicate content for seamless loop
        const clone = marquee?.innerHTML;
        marquee!.innerHTML += clone;

        gsap.to(items, {
            xPercent: 750,
            repeat: -1,
            yoyo: true,
            duration: 40,
            ease: "linear",
        });
    });

    return (
        <div ref={container} className="flex flex-col overflow-hidden">
            <h1 className="text-center  md:mb-10 text-[calc(20px_+_1.1vw)] text-hard-blue">پر فروش ترین ها</h1>
            <div ref={marqueeRef} className="flex items-center gap-5">
                {newestProducts.slice(0, 7).map(item => (
                    <article key={item.id} className="grid grid-cols-[120px] md:grid-cols-[150px] lg:grid-cols-[180px]">
                        <div>
                            <Image
                                width={90}
                                height={180}
                                src={item.thumbnail}
                                alt={item.name}
                                className="object-cove w-full"
                            />
                            <div className="flex flex-col p-2">
                                <h2 className="font-semibold text-hard-blue">{item.name}</h2>
                                <p className="text-small font-light text-gray-400">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                </p>
                                <div className="flex flex-col lg:justify-between items-center mt-2">
                                    <button className="text-[8px] md:text-small bg-blue-500 p-2 rounded text-white">
                                        + سبد خرید
                                    </button>
                                    <p className="text-regular md:text-medium lg:text-[16px]">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BestsellersList;
