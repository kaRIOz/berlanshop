import React from "react";
import { getUserFavorites } from "./queries";
import { notFound } from "next/navigation";

const Favorites = async () => {
    const favorites = await getUserFavorites();
    return <div>Favorites</div>;
};

export default Favorites;
