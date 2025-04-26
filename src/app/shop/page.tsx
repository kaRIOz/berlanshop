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
            <section className="w-full mx-auto bg-primary-content ">
                <h2 className="py-4 text-center">فروشگاه</h2>
                <article className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-[repeat(150px, 1fr)]">
                    {products?.map(product => <ProductCard key={product.id} product={product} />)}
                </article>
            </section>
        </>
    );
};

export default ShopPage;
