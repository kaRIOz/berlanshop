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
            <section className="w-9/12 mx-auto">
                <h2 className="my-4 text-center">فروشگاه</h2>
                <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
                    {products?.map(product => <ProductCard key={product.id} product={product} />)}
                </article>
            </section>
        </>
    );
};

export default ShopPage;
