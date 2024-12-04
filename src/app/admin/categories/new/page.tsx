import React from "react";
import CategoryForm from "../_components/category-form";
import { getCategories } from "../queries";

const NewCategory = async () => {
    const categories = await getCategories();
    return (
        <main className="w-4/5 mx-auto max-w-3xl">
            <h1 className="mb-4">دسته بندی جدید</h1>
            <CategoryForm categories={categories} />
        </main>
    );
};

export default NewCategory;
