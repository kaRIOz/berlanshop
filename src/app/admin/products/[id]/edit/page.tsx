import { notFound } from "next/navigation";
import { ProductForm } from "../../_components/product-form";
import { getProductsById } from "./queries";

export default async function EditProduct({ params: { id } }: { params: { id: string } }) {
    const product = await getProductsById(id);
    if (!product) notFound();
    return (
        <main className="w-4/5 mx-auto max-w-3xl">
            <h1 className="mb-4">ویرایش محصول </h1>
            <ProductForm
                product={{
                    mode: "edit",
                    id: +id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    SKU: product.SKU,
                    thumbnail: product.thumbnail,
                    images: product.images,
                    categoryId: product.categoryId,
                }}
            />
        </main>
    );
}
