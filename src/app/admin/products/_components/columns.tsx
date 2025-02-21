"use client";

import React, { useActionState, useEffect, useTransition } from "react";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

import { deleteProduct } from "../actions";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Loading } from "@/components/loading";
import { toast } from "@/components/ui/use-toast";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
export type Product = {
    id: number;
    thumbnail: string;
    name: string;
    description: string;
    price: string;
    category: {
        nameFa: string;
    };
};

// declare module "@tanstack/react-table" {
//     //allows us to define custom properties for our columns
//     interface ColumnMeta<TData extends RowData, TValue> {
//         filterVariant?: "range";
//     }
// }

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "thumbnail",
        header: "تصویر",
        cell: props => (
            <Image
                src={props.getValue() as string}
                alt="img"
                width={30}
                height={30}
                className="block mx-auto object-cover"
            />
        ),
    },
    {
        accessorKey: "name",
        header: "عنوان",
    },
    {
        id: "category",
        accessorKey: "category.nameFa",
        header: "دسته بندی",
    },
    {
        accessorKey: "description",
        header: "توضیحات",
    },
    {
        id: "price",
        accessorKey: "price",
        header: () => "قیمت",
        // meta: {
        //     filterVariant: "range",
        // },
    },
    {
        id: "actions",
        cell: function CellComponent({ row }) {
            const [pending, startTransition] = useTransition();
            const [state, action] = useActionState(deleteProduct, undefined);
            useEffect(() => {
                if (state) {
                    toast({
                        title: state.message,
                        variant: state.success === true ? "default" : "destructive",
                    });
                }
            });

            const product = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <HiOutlineDotsHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="flex flex-col">
                        <Button
                            asChild
                            size="sm"
                            className="bg-emerald-500 text-primary-content hover:bg-emerald-500/90"
                        >
                            <Link href={`/admin/products/${product.id}/edit`}>
                                ویرایش
                                <MdEdit />
                            </Link>
                        </Button>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button size="sm" variant="ghost">
                                    حذف
                                    <MdDelete className="text-red-500" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent alignOffset={-5} align="end" className="bg-primary-content">
                                <div className="p-6">
                                    <h1 className="text-center text-[14px]">آیا شما می خواهید محصول را حذف کنید؟</h1>

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
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
