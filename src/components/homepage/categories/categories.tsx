/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { getCategories } from "@/app/queries";
import Image from "next/image";
import CategoryList from "./categoriesList";

const HomeCategories = async () => {
    const categoriesData = getCategories();
    const [categories] = await Promise.all([categoriesData]);
    return (
        <section className="columns-[100px] md:columns-[300px]  lg:columns-[400px] px-3">
            {categories?.map(category => {
                return <CategoryList key={category.nameEn} category={category} />;
            })}
        </section>
    );
};

export default HomeCategories;
