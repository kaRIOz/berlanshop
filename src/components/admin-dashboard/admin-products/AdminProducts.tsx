"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FaSearch } from "react-icons/fa";
import Search from "../search/Search";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import Modal from "@/components/modal/Modal";

const adminAddProductSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.string().min(1),
});

type addProductForm = z.infer<typeof adminAddProductSchema>;

const AdminProductsList = ({ placeholder = "جستجوی کالاها" }) => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState<addProductForm[]>([]);

    const { register, handleSubmit, reset } = useForm<addProductForm>({
        resolver: zodResolver(adminAddProductSchema),
    });

    const onsSubmit = (data: z.infer<typeof adminAddProductSchema>) => {
        setShowModal(false);
        setProducts(prevProducts => [...prevProducts, data]);
        reset();
    };

    // const deleteHandler = (id: any) => {
    //     const newProducts = products.filter(product=> product.id !== id )
    //     setProducts(newProducts)
    // };

    return (
        <div className="bg-white shadow-[0_5px_30px_-16px_rgba(0,0,0,0.2)] p-2 rounded-lg mt-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 w-max">
                    <FaSearch />
                    <Search placeholder={placeholder} />
                </div>
                <button
                    className="text-[12px] bg-blue-500 text-white px-3 py-2 rounded-lg"
                    onClick={() => setShowModal(true)}
                >
                    + کالای جدید{" "}
                </button>
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative my-6 mx-auto ">
                                <Modal className="bg-white rounded-sm p-4 w-[800] max-w-3xl">
                                    <h1 className="text-center mb-5">کالای جدید</h1>
                                    <form onSubmit={handleSubmit(onsSubmit)} className="flex flex-col space-y-4">
                                        <input
                                            type="text"
                                            placeholder="عنوان"
                                            className="p-2 outline-none border border-blue-500 rounded-lg"
                                            {...register("title")}
                                        />

                                        <input
                                            type="text"
                                            placeholder="توضیحات"
                                            className="p-2 outline-none border border-blue-500 rounded-lg"
                                            {...register("description")}
                                        />
                                        <input
                                            type="text"
                                            placeholder="قیمت"
                                            className="p-2 outline-none border border-blue-500 rounded-lg"
                                            {...register("price")}
                                        />

                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded-lg "
                                            type="submit"
                                        >
                                            ثبت
                                        </button>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                        <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div className="w-10/12 mx-auto max-w-container">
                <div className="flex justify-between flex-1 items-center text-sm text-center ">
                    <p>عنوان</p>
                    <p>توضیحات</p>
                    <p>قیمت</p>
                    <p>اقدامات</p>
                </div>
                <div className="">
                    {products.map((product, index) => (
                        <div key={index} className="flex justify-between items-center my-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/imgSales1.jpg"}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-8 h-8 rounded-full "
                                />
                                <p>{product.title}</p>
                            </div>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <div>
                                <button>ویرایش</button>
                                <button
                                // onClick={deleteHandler}
                                >
                                    حذف
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminProductsList;
