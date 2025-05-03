/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { getCategories } from "@/app/queries";
import CategoryList from "./categoriesList";

const HomeCategories = async () => {
    const categoriesData = getCategories();
    const [categories] = await Promise.all([categoriesData]);
    return (
        <section className="columns-1 sm:columns-3 lg:columns-4 xl:columns-5 gap-2">
            {categories?.map(category => {
                return <CategoryList key={category.nameEn} category={category} />;
            })}
        </section>
    );
};

export default HomeCategories;
