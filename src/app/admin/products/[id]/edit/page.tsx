import { notFound } from "next/navigation";
import { ProductForm } from "../../_components/product-form";
import { getProductsById } from "./queries";
import { getCategories } from "@/app/admin/categories/queries";

export default async function EditProduct({ params: { id } }: { params: { id: string } }) {
    const productData = getProductsById(id);
    const categoriesData = getCategories();
    const [product, categories] = await Promise.all([productData, categoriesData]);
    if (!product) notFound();
    return (
        <main className="w-4/5 mx-auto max-w-3xl">
            <h1 className="mb-4">ویرایش محصول </h1>
            <ProductForm
                categories={categories}
                product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    SKU: product.SKU,
                    thumbnail: product.thumbnail,
                    category: {
                        id: product.category?.id ?? 0,
                        nameFa: product.category?.nameFa ?? "بدون دسته بندی",
                    },
                }}
                categories={categories}
            />
        </main>
    );
}
