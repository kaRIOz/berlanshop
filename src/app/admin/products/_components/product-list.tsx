"use client";
import type { SelectProductModel } from "@/drizzle/schema/product/product";
import { formatPrice } from "@/utils/string";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { deleteProduct } from "../actions";
import { Loading } from "@/components/loading";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

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
                        <td className="space-x-1 space-x-reverse">
                            <Button
                                variant="secondary"
                                asChild
                                size="sm"
                                className="bg-emerald-500 text-primary-content hover:bg-emerald-500/90"
                            >
                                <Link href={`/admin/category/${product.id}/edit`}>ویرایش</Link>
                            </Button>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="destructive" size="sm">
                                        حذف{" "}
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent className="shadow-none bg-slate-50">
                                    <div className="p-6">
                                        <h1 className="text-center text-[14px]">
                                            آیا شما می خواهید محصول را حذف کنید ؟
                                        </h1>

                                        <div className="flex justify-evenly items-center mt-4">
                                            <Button
                                                onClick={async () => {
                                                    const response = await deleteProduct(product.id);
                                                    if (response) {
                                                        toast({
                                                            title: response.message,
                                                            variant:
                                                                response.success === true ? "default" : "destructive",
                                                        });
                                                    }
                                                }}
                                                variant="destructive"
                                                size="sm"
                                            >
                                                {pending ? <Loading /> : "بله"}
                                            </Button>

                                            <PopoverClose asChild>
                                                <Button variant="default" size="sm">
                                                    خیر
                                                </Button>
                                            </PopoverClose>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;
