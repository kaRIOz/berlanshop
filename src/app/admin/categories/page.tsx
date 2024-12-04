import Search from "@/components/admin-dashboard/search/Search";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { getCategories } from "./queries";
import CategoryList from "./_components/category-list";

const AdminCategory = async () => {
    const categories = await getCategories();

    console.log(categories);

    return (
        <div className="mt-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-200 w-max">
                    <FaSearch />
                    <Search placeholder={"جستجو در سری دسته بندی ها"} />
                </div>
                <Link
                    href={"/admin/categories/new"}
                    className="text-[12px] bg-blue-500 text-white px-3 py-2 rounded-lg"
                >
                    + دسته بندی جدید{" "}
                </Link>
            </div>
            <CategoryList categories={categories} />
        </div>
    );
};

export default AdminCategory;
