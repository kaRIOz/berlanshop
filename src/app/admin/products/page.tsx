import React from "react";
import { getProducts } from "./queries";
import { FaSearch } from "react-icons/fa";
import Search from "@/components/admin-dashboard/search/Search";
import ProductList from "./_components/product-list";
import Link from "next/link";

const AdminProducts = async () => {
    const products = await getProducts();

    return (
        <div className=" mt-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-200 w-max">
                    <FaSearch />
                    <Search placeholder={"جستجو در سری محصولات شما"} />
                </div>
                <Link href={"/admin/products/new"} className="text-[12px] bg-blue-500 text-white px-3 py-2 rounded-lg">
                    + کالای جدید{" "}
                </Link>
            </div>
            <ProductList products={products} />
        </div>
    );
};

export default AdminProducts;
