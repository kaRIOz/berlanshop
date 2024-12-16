import React from "react";

import Header from "@/components/homepage/header/Header";
import SearchVsCategory from "@/components/homepage/search-category/SearchVsCategory";
import ProductCard from "@/components/product-card";
import { notFound } from "next/navigation";
import { getUserProducts } from "./queries";

const ShopPage = async () => {
    const products = await getUserProducts();
    if (!products) notFound();
    return (
        <>
            <Header />
            <SearchVsCategory />
            <section className="w-[95%] md:w-11/12 mx-auto">
                <h2 className="my-4 text-center">فروشگاه</h2>
                <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-[repeat(250px, 1fr)]">
                    {products?.map(product => <ProductCard key={product.id} product={product} />)}
                </article>
            </section>
        </>
    );
};

export default ShopPage;
