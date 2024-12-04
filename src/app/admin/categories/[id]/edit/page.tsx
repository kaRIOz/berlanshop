import React from "react";
import CategoryForm from "../../_components/category-form";
import { getCategoriesById } from "./queries";
import { notFound } from "next/navigation";
import { getCategories } from "../../queries";

const EditCategory = async ({ params: { id } }: { params: { id: string } }) => {
    const categories = await getCategories();
    const category = await getCategoriesById(id);
    if (!categories || !category) notFound();
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
};

export default EditCategory;
