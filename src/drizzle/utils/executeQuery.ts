// import { auth } from "@/auth";

import { auth } from "@/auth";

type Options<T> = {
    queryFn: {
        (id?: number, role?: string): Promise<T>;
    };
    serverErrorMessage?: string;
    isProtected?: boolean;
};

export async function executeQuery<T>({
    queryFn,
    serverErrorMessage = "Error executing query",
    isProtected = true,
}: Options<T>) {
    try {
        if (isProtected) {
            const session = await auth();

            if (!session) throw new Error("Not authorized");
            const userId = session.user.id ? Number(session.user.id) : undefined;
            const userRole = session.user.role ? session.user.role : undefined;
            if (userId) {
                return await queryFn(userId, userRole);
            }
        } else {
            return await queryFn();
        }
    } catch (error) {
        console.error(serverErrorMessage, error);
        return null;
    }
}
