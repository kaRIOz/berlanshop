"use client";

import {
    ColumnDef,
    ColumnFiltersState,
    ColumnOrderState, //HERE
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    getFacetedMinMaxValues,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Search from "@/components/admin-dashboard/search/Search";
import { useState } from "react";
import { DropDownFilters } from "./DropDownFilters";
import { getDropDownValues } from "@/lib/utils";
import Paginations from "../../_components/Paginations";
import RangeFilter from "./RangeFilter";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        //sorting:
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters,
            columnOrder,
        },
        //pagination:
        getPaginationRowModel: getPaginationRowModel(),
        //Order of columns
        onColumnOrderChange: setColumnOrder,

        //filters
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),

        //Faceted filters:
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedRowModel: getFacetedRowModel(),

        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
        initialState: {
            pagination: { pageSize: 8 },
        },

        //This can be added to insert custom functions, accessible :table.options.meta.methodName
        meta: {
            myOwnMethod: () => {
                console.log("Custom method");
            },
        },
    });

    const price = table.getColumn("price");
    console.log(price);

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4">
                <div className="flex flex-col lg:flex-row lg:items-center   gap-2">
                    <Search
                        placeholder="جستوجوی عنوان"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={e => table.getColumn("name")?.setFilterValue(e.target.value)}
                    />

                    <div className="flex-col">
                        {table.getColumn("category") && (
                            <DropDownFilters
                                column={table.getColumn("category")}
                                title="دسته بندی"
                                options={getDropDownValues(data)}
                            />
                        )}
                    </div>
                    <div>
                        {table.getColumn("price") && (
                            <div className="flex items-center gap-2">
                                <RangeFilter
                                    placeholder={`از ${
                                        table.getColumn("price")?.getFacetedMinMaxValues()?.[0] !== undefined
                                            ? `(${table.getColumn("price")?.getFacetedMinMaxValues()?.[0]})`
                                            : ""
                                    }`}
                                    type="number"
                                    value={(table.getColumn("price")?.getFilterValue() as [number, number])?.[0] ?? ""}
                                    onChange={value =>
                                        table
                                            .getColumn("price")
                                            ?.setFilterValue((old: [number, number]) => [value, old?.[1]])
                                    }
                                />
                                <RangeFilter
                                    placeholder={`تا ${
                                        table.getColumn("price")?.getFacetedMinMaxValues()?.[1] !== undefined
                                            ? `(${table.getColumn("price")?.getFacetedMinMaxValues()?.[1]})`
                                            : ""
                                    }`}
                                    type="number"
                                    value={(table.getColumn("price")?.getFilterValue() as [number, number])?.[1] ?? ""}
                                    onChange={value =>
                                        table
                                            .getColumn("price")
                                            ?.setFilterValue((old: [number, number]) => [old?.[0], value])
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>

                <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-600 my-2 lg:my-0"
                    onClick={() => {
                        table.resetColumnFilters();
                        table.resetColumnOrder();
                    }}
                >
                    بازنشانی
                </Button>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead key={header.id} className="text-center">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id} className="even:bg-[#f5f6f8]">
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} className="text-center p-2">
                                            <p className="text-gray-700 text-regular">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </p>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    نتیجه ایی یافت نشد !
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Paginations table={table} />
        </div>
    );
}
