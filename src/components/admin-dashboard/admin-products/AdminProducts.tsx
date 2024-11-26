"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FaSearch } from "react-icons/fa";
import Search from "../search/Search";

const AdminProductsList = ({ placeholder = "جستجوی کالاها" }) => {
    const [showModal, setShowModal] = useState(false);

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
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="relative p-6 flex-auto"></div>

                                    <div className="flex items-center justify-end p-6  rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            خروج
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            ثبت
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <table className="table w-full mt-3">
                <thead className="bg-gray-100 rounded-lg">
                    <tr>
                        <td>عنوان</td>
                        <td>توضیحات</td>
                        <td>قیمت</td>
                        <td>اقدامات</td>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr>
                        <td>
                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src={"/imgSales1.jpg"}
                                    alt="img"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full w-8 h-8"
                                />
                                <span>شال</span>
                            </div>
                        </td>
                        <td> سبدسبندسدسب سیبدسنمبدسی لورم ایپسوم ...</td>
                        <td>248.000</td>
                        <td className="">
                            <button className="bg-emerald-500 px-2 py-1 text-white  rounded-lg mx-1">ویرایش</button>
                            <button className="bg-red-500 px-2 py-1 text-white  rounded-lg ">حذف</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsList;
