import { DB } from "@/drizzle";
import { product } from "@/drizzle/schema";
import { ProductSchema } from "@/drizzle/schema/product/product";

const mock: ProductSchema[] = [
    {
        name: "شال ایمان",
        description: "شال ایمان با تولید ساده و مناسب برای ایمان و دریافت کالاهای موبایل",
        SKU: "10001",
        price: "250_000",
        thumbnail: "/test.png",
        images: "/test.png",
        categoryId: 1,
    },
    {
        name: "شال ایمان دوم",
        description: "شال ایمان با تولید ساده و مناسب برای ایمان و دریافت کالاهای موبایل",
        SKU: "10002",
        price: "250_000",
        thumbnail: "/test.png",
        images: "/test.png",
        categoryId: 1,
    },
];

export async function seed(db: DB) {
    await db.insert(product).values(mock);
}
