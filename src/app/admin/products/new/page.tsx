import React from "react";
import { ProductForm } from "../_components/product-form";

const NewProduct = () => {
    return (
        <main className="w-4/5 mx-auto max-w-3xl">
            <h1 className="mb-4">محصول جدید</h1>
            <ProductForm />
        </main>
    );
};

export default NewProduct;
