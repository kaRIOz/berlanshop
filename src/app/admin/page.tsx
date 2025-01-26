import React from "react";
import { useReactTable } from "@tanstack/react-table";

import { getAdminProducts } from "./products/queries";

type Props = {
    products:
        | {
              id: number;
              name: string;
              description: string;
              SKU: string;
              price: string;
              thumbnail: string;
              category: {
                  nameFa: string;
              } | null;
          }[]
        | null;
};

const AdminDashboard = async () => {
    const products = await getAdminProducts();

    return <div className="h-full p-3">home</div>;
};

export default AdminDashboard;
