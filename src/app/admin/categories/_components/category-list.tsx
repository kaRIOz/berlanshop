"use client";

import React, { useTransition } from "react";
import { SelectCategoryModel } from "@/drizzle/schema/product/category";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Loading } from "@/components/loading";

type Props = {
    categories: Pick<SelectCategoryModel, "id" | "nameFa" | "nameEn" | "thumbnail" | "parentId">[] | null;
};
const CategoryList = ({ categories }: Props) => {
    const [pending, startTransition] = useTransition();
    return (
        <table className="table w-full mt-3">
            <thead className="bg-slate-200">
                <tr>
                    <td>نام</td>
                    <td>مسیر</td>
                    <td>parentId</td>
                    <td>اقدامات</td>
                </tr>
            </thead>
            <tbody className="tbody">
                {categories?.map(category => (
                    <tr key={category.id}>
                        <td>
                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src={category.thumbnail}
                                    alt="img"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full w-8 h-8"
                                />
                                <span>{category.nameFa}</span>
                            </div>
                        </td>
                        <td>{category.nameEn}</td>
                        <td>{category.parentId ? category.parentId : "null"}</td>
                        <td>
                            <Link
                                href={`/admin/category/${category.id}/edit`}
                                className="bg-emerald-500 px-2 py-1 text-white  rounded-lg mx-1"
                            >
                                ویرایش
                            </Link>
                            <button
                                onClick={async () => {
                                    // const response = await deleteProduct(category.id);
                                    // if (response) {
                                    //     toast({
                                    //         title: response.message,
                                    //         variant: response.success === true ? "default" : "destructive",
                                    //     });
                                    // }
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

export default CategoryList;
