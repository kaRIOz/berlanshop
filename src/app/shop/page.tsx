import Link from "next/link";
import React from "react";

// type Product = {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
// };

const product = [
    {
        id: "1",
        name: "پروتکل اینترنتی مالی",
        price: 1000,
        image: "#",
    },
    {
        id: "2",
        name: "پروتکل اینترنتی مالی",
        price: 1000,
        image: "#",
    },
    {
        id: "3",
        name: "پروتکل اینترنتی مالی",
        price: 1000,
        image: "#",
    },
];

const ShopPage = async () => {
    return (
        <section className="flex flex-col items-center w-screen h-screen">
            <Link href={"/"}>ShopPage </Link>
            <br />
            <hr />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {product.concat([...product, ...product, ...product]).map((product, index) => (
                    <div key={index}>
                        <h2>{product.name}</h2>
                        <p>قیمت {product.price}</p>
                        {/* <img src={product.image} alt={product.name} /> */}
                    </div>
                ))}
            </article>
        </section>
    );
};

export default ShopPage;
