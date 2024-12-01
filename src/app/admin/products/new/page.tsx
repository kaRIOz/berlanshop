import React from "react";
import { ProductForm } from "../_components/product-form";
import { getCategories } from "@/app/queries";

const NewProduct = async () => {
    const categoriesData = getCategories();
    const [categories] = await Promise.all([categoriesData]);

    return (
        <main className="w-4/5 mx-auto max-w-3xl">
            <h1 className="mb-4">محصول جدید</h1>
            <ProductForm categories={categories} />
        </main>
    );
};

export default NewProduct;
