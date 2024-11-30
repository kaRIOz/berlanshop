"use client";
import type { SelectProductModel } from "@/drizzle/schema/product/product";
import { formatPrice } from "@/utils/string";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { deleteProduct } from "../actions";
import { Loading } from "@/components/loading";
import { toast } from "@/components/ui/use-toast";

type Props = {
    products:
        | Pick<
              SelectProductModel,
              "id" | "name" | "description" | "SKU" | "price" | "thumbnail" | "images" | "categoryId"
          >[]
        | null;
};

const ProductList = ({ products }: Props) => {
    const [pending, startTransition] = useTransition();

    return (
        <table className="table w-full mt-3">
            <thead className="bg-slate-200">
                <tr>
                    <td>عنوان</td>
                    <td>توضیحات</td>
                    <td>قیمت</td>
                    <td>اقدامات</td>
                </tr>
            </thead>
            <tbody className="tbody">
                {products?.map(product => (
                    <tr key={product.id}>
                        <td>
                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src={product.thumbnail}
                                    alt="img"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full w-8 h-8"
                                />
                                <span>{product.name}</span>
                            </div>
                        </td>
                        <td>{product.description}</td>
                        <td>{formatPrice(Number(product.price))} تومان</td>
                        <td className="">
                            <Link
                                href={`/admin/products/${product.id}/edit`}
                                className="bg-emerald-500 px-2 py-1 text-white  rounded-lg mx-1"
                            >
                                ویرایش
                            </Link>
                            <button
                                onClick={async () => {
                                    const response = await deleteProduct(product.id);
                                    if (response) {
                                        toast({
                                            title: response.message,
                                            variant: response.success === true ? "default" : "destructive",
                                        });
                                    }
                                }}
                                className="bg-red-500 px-2 py-1 text-white  rounded-lg "
                            >
                                {pending ? <Loading /> : "حذف"}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;
