"use client";

import React, { useEffect, useState } from "react";

import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Sales from "@/components/sales/Sales";
import Newest from "@/components/newest/Newest";
import SearchVsCategory from "@/components/search-category/SearchVsCategory";
import Footer from "@/components/footer/footer";
import type { CategorySchema } from "@/drizzle/schema/product/category";
import { getCategories } from "./queries";

export default function Home() {
    const [categories, setCategories] = useState<CategorySchema[]>([]);
    useEffect(() => {
        const res = async () => {
            const data = (await getCategories()) as CategorySchema[];
            setCategories(data);
        };
        res();
    }, []);

    return (
        <section className="w-full mx-auto ">
            <Header />
            <SearchVsCategory />
            <Banner />
            <div className="max-w-container mx-auto px-4">
                <Sales />
                <Newest />
            </div>
            <div className="flex gap-4 justify-center items-center">
                <h2>همه</h2>
                {categories.map(category => (
                    <h2 key={category.id}>{category.nameFa}</h2>
                ))}
            </div>
            <Footer />
        </section>
    );
}
