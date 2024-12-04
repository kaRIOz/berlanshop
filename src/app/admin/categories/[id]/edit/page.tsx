import React from "react";
import CategoryForm from "../../_components/category-form";
import { getCategories } from "@/app/queries";

const EditCategory = async () => {
    const categories = await getCategories();
    return (
        <div>
            <CategoryForm categories={categories} />
        </div>
    );
};

export default EditCategory;
