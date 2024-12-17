import { DB } from "@/drizzle";
import { user } from "@/drizzle/schema";

const mock = () => {
    const data /* Omit<Extract<UserSchema, { mode: "signUp" }>, "mode">[] */ = [
        {
            fullName: " ایمان جعفری ایناللو",
            age: 25,
            password: "123456",
            email: "imancx.cx@gmail.com",
            phoneNumber: "09037886603",
        },
        {
            fullName: "حمید فتاحی اردکانی",
            age: 25,
            password: "123456",
            email: "hamidfattahi.gaga@gmail.com",
            phoneNumber: "09356741425",
        },
    ];

    return data;
};

export async function seed(db: DB) {
    await db.insert(user).values(mock());
}
