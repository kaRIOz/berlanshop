import React from "react";
import Link from "next/link";
import { getAdminProducts } from "./queries";
import { notFound } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const AdminProducts = async () => {
    const products = await getAdminProducts();
    if (!products) notFound();
    return (
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <Link href={"/admin/products/new"} className="mr-auto">
                    <Button size="sm" variant="secondary" className="font-semibold bg-[#9ec1fb] hover:bg-[#9ec2fba8]">
                        <FaPlus />
                        <p>کالای جدید</p>
                    </Button>
                </Link>
            </div>
            <DataTable columns={columns} data={products} />
        </div>
    );
};

export default AdminProducts;
