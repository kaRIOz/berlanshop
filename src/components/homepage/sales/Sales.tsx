/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./sales.css";
import { getCategories } from "@/app/queries";
import Image from "next/image";

const Sales = async () => {
    const categoriesData = getCategories();
    const [categories] = await Promise.all([categoriesData]);
    return (
        <section className="">
            <ul className="contactsheet text-center">
                {categories?.map(category => {
                    return (
                        <li key={category.nameEn}>
                            <div className="relative">
                                <Image src={category.thumbnail} alt="category" width={100} height={100} />
                                <h2 className="absolute bottom-5 left-5 text-white text-[12px] md:text-[20px]">
                                    {category.nameFa}
                                </h2>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Sales;
