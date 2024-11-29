import Image from "next/image";
import Link from "next/link";
import React from "react";

import { product } from "$/constants";
import Header from "@/components/homepage/header/Header";
import SearchVsCategory from "@/components/homepage/search-category/SearchVsCategory";

const ShopPage = async () => {
    return (
        <>
            <Header />
            <SearchVsCategory />
            <section className="flex flex-col items-center w-3/4 mx-auto">
                <Link href={"/"}>فروشگاه</Link>
                <br />
                <hr />
                <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
                    {product.concat([...product, ...product, ...product]).map((product, index) => (
                        <div key={index} className="w-64  hover:shadow-md transition-all ease-in-out ">
                            <Image
                                width={200}
                                height={200}
                                src="https://plus.unsplash.com/premium_photo-1663013729768-8fcfe4cda447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fHww"
                                alt={product.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="flex flex-col p-2">
                                <h2 className="font-medium">{product.name}</h2>
                                <p className="text-[11px] font-light text-gray-400">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <button className="text-[10px] bg-blue-500 p-2 rounded text-white">
                                        اضافه کردن به سبد خرید
                                    </button>
                                    <p className="">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};

export default ShopPage;
