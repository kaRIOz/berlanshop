"use client";

import React, { useTransition } from "react";
import { SelectCategoryModel } from "@/drizzle/schema/product/category";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Loading } from "@/components/loading";
import { deleteCategory } from "../action";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

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
                        <td className="space-x-1 space-x-reverse">
                            <Button
                                variant="secondary"
                                asChild
                                size="sm"
                                className="bg-emerald-500 text-primary-content hover:bg-emerald-500/90"
                            >
                                <Link href={`/admin/category/${category.id}/edit`}>ویرایش</Link>
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
                                            آیا شما می خواهید دسته بندی را حذف کنید ؟
                                        </h1>

                                        <div className="flex justify-evenly items-center mt-4">
                                            <Button
                                                onClick={async () => {
                                                    const response = await deleteCategory(category.id);
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

export default CategoryList;
