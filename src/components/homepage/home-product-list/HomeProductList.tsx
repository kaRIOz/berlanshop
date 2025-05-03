"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
// data
import { products } from "$/constants";
//icons
import { IconToman } from "@/components/icons/icons";
// keen slider
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Product {
    id: number;
    title: string;
    price: number;
    finalPrice: number;
    description: string;
    isBestSeller: boolean;
    isNew: boolean;
}

interface ProductListProps {
    title: string;
    filterType: "best-sell" | "newest";
}

const HomeProductList: FC<ProductListProps> = ({ title, filterType }) => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        rtl: true,
        mode: "free",
        slides: { perView: "auto", spacing: 7 },
    });

    const filteredProducts = products.filter(product =>
        filterType === "best-sell" ? product.isBestSeller : product.isNew,
    );

    return (
        <div className="flex flex-col gap-1.5 lg:gap-3 overflow-hidden">
            <div className="flex w-full items-center justify-between pl-2 lg:pl-0">
                <span className="text-right text-medium lg:text-[16px] text-hard-blue font-semibold">{title}</span>
                {filterType === "best-sell" ? (
                    <Link
                        href={"#"}
                        className="py-1.5 text-medium font-medium text-primary-main lg:py-2 lg:font-semibold"
                    >
                        مشاهده همه
                    </Link>
                ) : null}
            </div>
            <div className="relative overflow-hidden">
                <div className="navigation-wrapper group relative w-full">
                    <div ref={sliderRef} className="keen-slider [&>*:last-child]:pl-0 lg:[&>*:last-child]:pl-0">
                        {filteredProducts.map(product => (
                            <div
                                className="keen-slider__slide min-w-fit max-w-fit px-0 bg-primary-content"
                                key={product.id}
                            >
                                <Link
                                    href={"#"}
                                    className="flex h-full  flex-col gap-2 rounded border border-border-gray-light bg-surface-solid-0 p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[224px]"
                                    style={{ maxWidth: 224, minWidth: 164 }}
                                >
                                    <div className="flex grow flex-col gap-1">
                                        <Image
                                            src={"/logo.png"}
                                            alt={product.title}
                                            width={100}
                                            height={100}
                                            className="aspect-square w-32 lg:w-36 h-32 lg:h-36 mx-auto object-contain"
                                        />
                                        <span className="text-regular font-light text-[#737373] lg:text-medium">
                                            {product.title}
                                        </span>
                                        <h3 className="line-clamp-2 text-regular text-hard-blue lg:text-medium">
                                            {product.description.slice(0, 40) +
                                                (product.description.length > 40 ? "..." : "")}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                        <div className="flex flex-col items-center text-regular lg:text-medium text-hard-blue">
                                            {!product.finalPrice ? (
                                                <div className="flex items-center gap-1 w-22 justify-center pt-5 lg:pt-6">
                                                    <span className="font-normal text-hard-blue">{product.price}</span>
                                                    <IconToman />
                                                </div>
                                            ) : (
                                                <>
                                                    <span className="text-[#737373] line-through">{product.price}</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="font-normal text-hard-blue">
                                                            {product.finalPrice}
                                                        </span>
                                                        <IconToman />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {product.finalPrice ? (
                                            <p className="w-[33px] leading-[23px] rounded-md bg-[#E11D48] text-center text-regular font-normal text-primary-content lg:w-10 lg:text-medium">
                                                70%
                                            </p>
                                        ) : null}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProductList;
