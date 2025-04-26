import React from "react";
import { getUserProducts } from "@/app/shop/queries";
import NewestList from "./NewestList";
import BestsellersList from "../bestsellers/BestsellersList";

const Newest = async () => {
    const newestProducts = await getUserProducts();
    return (
        <section className="mt-10 mb-3">
            <NewestList newestProducts={newestProducts} />
            <BestsellersList newestProducts={newestProducts} />
        </section>
    );
};

export default Newest;
