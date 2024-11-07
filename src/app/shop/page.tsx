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
        <section className="flex flex-col items-center w-3/4 mx-auto">
            <Link href={"/"}>فروشگاه</Link>
            <br />
            <hr />
            <article className="flex  justify-center md:justify-between items-center flex-wrap gap-4">
                {product.concat([...product, ...product, ...product]).map((product, index) => (
                    <div key={index} className="w-64 border border-2 hover:shadow-md transition-all ease-in-out ">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1663013729768-8fcfe4cda447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fHww"
                            alt={product.name}
                            className="w-full h-80 object-cover"
                        />
                        <h2 className="font-semibold p-2">{product.name}</h2>
                        <div className="flex justify-between items-center p-2">
                            <p>قیمت </p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default ShopPage;
