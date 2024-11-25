"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
// import icons
import { BiCategoryAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const SearchVsCategory = () => {
    const [showCategory, setShowCategory] = useState(false);
    return (
        <div className="w-full bg-[#f5f5f3] relative ">
            <div className="flex justify-between items-center max-w-container mx-auto w-full h-20 lg:h-24  px-8">
                <div className="relative w-3/4 lg:w-[600px]  h-[35px] md:h-[50px]  bg-white flex justify-between items-center gap-2  px-6 rounded-sm">
                    <FaSearch className="w-5 h-4 md:h-5" />
                    <input
                        type="text"
                        className="h-5/6 md:h-full flex-1 text-sm outline-none placeholder:text-[#C4C4C4] placeholder:text-[12px]"
                        placeholder="جستجوی کالاها"
                    />
                </div>
                <div
                    className="flex justify-between items-center gap-x-2 relative"
                    onClick={() => setShowCategory(!showCategory)}
                >
                    <BiCategoryAlt className="w-5 h-5" />
                    <p className="text-[14px] font-normal">دسته بندی کالاها</p>

                    {showCategory && (
                        <motion.ul
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-6  z-50 bg-white shadow-sm w-36 h-auto p-4 pb-6"
                        >
                            <div>
                                <li className="px-4 py-1  cursor-pointer hover:pr-6 hover:text-red-600 duration-300 ">
                                    شال
                                </li>
                                <li className="px-4 py-1  cursor-pointer hover:pr-6 hover:text-red-600 duration-300">
                                    روسری
                                </li>
                                <li className="px-4 py-1  cursor-pointer hover:pr-6 hover:text-red-600 duration-300">
                                    مقنعه
                                </li>
                                <li className="px-4 py-1  cursor-pointer hover:pr-6 hover:text-red-600 duration-300">
                                    توربان
                                </li>
                            </div>
                        </motion.ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchVsCategory;
