import React from "react";
import CategoryForm from "../../_components/category-form";
import { getCategoriesById } from "./queries";
import { notFound } from "next/navigation";
import { getCategories } from "../../queries";

export default async function EditCategory({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const categoryData = getCategoriesById(id);
    const categoriesِِData = getCategories();
    const [category, categories] = await Promise.all([categoryData, categoriesِِData]);
    if (!category) notFound();
    return (
        <div>
            <CategoryForm
                categories={categories}
                category={{
                    mode: "edit",
                    id: +id,
                    nameFa: category.nameFa,
                    nameEn: category.nameEn,
                    thumbnail: category.thumbnail,
                }}
            />
        </div>
    );
}
