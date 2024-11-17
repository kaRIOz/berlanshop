"use client";

import React from "react";

import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Sales from "@/components/sales/Sales";
import Newest from "@/components/newest/Newest";
import SearchVsCategory from "@/components/search-category/SearchVsCategory";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
        <section className="w-full mx-auto ">
            <Header />
            <SearchVsCategory />
            <Banner />
            <div className="max-w-container mx-auto px-4">
                <Sales />
                <Newest />
            </div>

            <Footer />
        </section>
    );
}
