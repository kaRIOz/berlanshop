"use client";
import { formatPrice } from "@/utils/string";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useEffect, useTransition } from "react";
import { deleteProduct } from "../actions";
import { Loading } from "@/components/loading";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import env from "@/configs/env";

type Props = {
    products:
        | {
              id: number;
              name: string;
              description: string;
              SKU: string;
              price: string;
              thumbnail: string | null;
              category: {
                  nameFa: string;
              } | null;
          }[]
        | null;
};

const ProductList = ({ products }: Props) => {
    const [pending, startTransition] = useTransition();
    const [state, action] = useActionState(deleteProduct, undefined);
    useEffect(() => {
        if (state) {
            toast({
                title: state.message,
                variant: state.success === true ? "default" : "destructive",
            });
        }
    }, [state]);

    return (
        <table className="table w-full mt-3">
            <thead className="bg-slate-200">
                <tr>
                    <td>عنوان</td>
                    <td>توضیحات</td>
                    <td>قیمت</td>
                    <td>دسته بندی</td>
                    <td>اقدامات</td>
                </tr>
            </thead>
            <tbody className="tbody">
                {products ? (
                    products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <div className="flex justify-center items-center gap-2">
                                    <Image
                                        src={product.thumbnail ?? `${env.NEXT_DEFAULT_PRODUCT_IMAGE}`}
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
                            <td>{product.category?.nameFa ?? "بدون دسته بندی"}</td>
                            <td className="space-x-1 space-x-reverse">
                                <Button
                                    variant="secondary"
                                    asChild
                                    size="sm"
                                    className="bg-emerald-500 text-primary-content hover:bg-emerald-500/90"
                                >
                                    <Link href={`/admin/products/${product.id}/edit`}>ویرایش</Link>
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
                                                    onClick={() => {
                                                        startTransition(async () => await action(product.id));
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
                    ))
                ) : (
                    <p>لیست محصولات خالی می باشد</p>
                )}
            </tbody>
        </table>
    );
};

export default ProductList;
