import { DB } from "@/drizzle";
import { user } from "@/drizzle/schema";
import { UserSchema } from "@/drizzle/schema/user/user";
import { faker } from "@faker-js/faker";

const mock = () => {
    const data: Omit<Extract<UserSchema, { mode: "signUp" }>, "mode">[] = [];

    for (let i = 0; i < 20; i++) {
        data.push({
            fullName: faker.person.fullName(),
            password: faker.internet.password({ memorable: true, length: 4 }),
            age: faker.number.int({ min: 18, max: 99 }),
            email: faker.internet.email(),
        });
    }

    return data;
};

export async function seed(db: DB) {
    await db.insert(user).values(mock());
}
