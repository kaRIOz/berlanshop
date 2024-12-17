import React from "react";
import { getUserFavorites } from "./queries";
import ProductCard from "@/components/product-card";
import { wait } from "@/lib/utils";

const Favorites = async () => {
    const favorites = await getUserFavorites();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-[repeat(250px, 1fr)]">
            {favorites && favorites.length > 0 ? (
                favorites.map(product => <ProductCard key={product.id} product={product} />)
            ) : (
                <p>chizi nist</p>
            )}
        </div>
    );
};

export default Favorites;
