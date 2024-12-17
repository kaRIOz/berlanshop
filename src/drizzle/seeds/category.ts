import { DB } from "@/drizzle";
import { category } from "@/drizzle/schema";

const mock = [
    {
        id: 1,
        nameFa: "شال",
        nameEn: "shaal",
        parentId: null,
        thumbnail: "/test.png",
    },
    {
        id: 2,
        nameFa: "روسری",
        nameEn: "roosari",
        parentId: null,
        thumbnail: "/test.png",
    },
    {
        id: 3,
        nameFa: "مقنعه",
        nameEn: "maghnae",
        parentId: null,
        thumbnail: "/test.png",
    },
    {
        id: 4,
        nameFa: "توربان",
        nameEn: "toorban",
        parentId: null,
        thumbnail: "/test.png",
    },
    {
        id: 5,
        nameFa: "شال مجلسی ",
        nameEn: "majlesi",
        parentId: 1,
        thumbnail: "/test.png",
    },
    {
        id: 6,
        nameFa: "شال مجلسی توری",
        nameEn: "toori",
        parentId: 5,
        thumbnail: "/test.png",
    },
];

export async function seed(db: DB) {
    await db.insert(category).values(mock);
}
