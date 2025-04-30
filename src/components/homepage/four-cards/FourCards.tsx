"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// keen slider
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const FourCards = () => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1.3, spacing: 18, origin: "center" },
    });

    return (
        <>
            <div className="px-0 relative min-h-[110px] md:hidden">
                <div className="navigation-wrapper group relative w-full">
                    <div ref={sliderRef} className="keen-slider">
                        <Link href={"#"} className="keen-slider__slide overflow-hidden rounded">
                            <Image
                                className="w-full h-full object-cover"
                                alt="logo"
                                width={100}
                                height={100}
                                src={
                                    "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600"
                                }
                            />
                        </Link>
                        <Link href={"#"} className="keen-slider__slide overflow-hidden rounded">
                            <Image
                                className="w-full h-full object-cover"
                                alt="logo"
                                width={100}
                                height={100}
                                src={
                                    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
                                }
                            />
                        </Link>
                        <Link href={"#"} className="keen-slider__slide overflow-hidden rounded">
                            <Image
                                className="w-full h-full object-cover"
                                alt="logo"
                                width={100}
                                height={100}
                                src={
                                    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"
                                }
                            />
                        </Link>
                        <Link href={"#"} className="keen-slider__slide overflow-hidden rounded">
                            <Image
                                className="w-full h-full object-cover"
                                alt="logo"
                                width={100}
                                height={100}
                                src={
                                    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
                                }
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-6">
                    <Link href={"#"} className="relative overflow-hidden rounded">
                        <Image
                            className="w-full h-full"
                            alt="logo"
                            width={100}
                            height={100}
                            src={
                                "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                        />
                    </Link>
                    <Link href={"#"} className="relative overflow-hidden rounded">
                        <Image
                            className="w-full h-full"
                            alt="logo"
                            width={100}
                            height={100}
                            src={
                                "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                        />
                    </Link>
                    <Link href={"#"} className="relative overflow-hidden rounded">
                        <Image
                            className="w-full h-full"
                            alt="logo"
                            width={100}
                            height={100}
                            src={
                                "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                        />
                    </Link>
                    <Link href={"#"} className="relative overflow-hidden rounded">
                        <Image
                            className="w-full h-full"
                            alt="logo"
                            width={100}
                            height={100}
                            src={
                                "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FourCards;
