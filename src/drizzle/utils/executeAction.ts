import { auth } from "@/auth";
import { getErrorMessage } from "@/lib/utils";
import { isRedirectError } from "next/dist/client/components/redirect";

type Options<T> = {
    actionFn: {
        (userId?: number): Promise<T>;
    };
    isProtected?: boolean;
    serverErrorMessage?: string;
    clientSuccessMessage?: string;
};

export type OperationResult = { success: boolean; message: string };

export async function executeAction<T>({
    actionFn,
    isProtected = true,
    serverErrorMessage = "Error executing action",
    clientSuccessMessage = "Operation was successful",
}: Options<T>): Promise<{ success: boolean; message: string }> {
    try {
        if (isProtected) {
            const session = await auth();
            if (!session) throw new Error("Not authorized");
            const userId = session.user.id ? Number(session.user.id) : undefined;
            if (userId) {
                await actionFn(userId);
            }
        } else {
            await actionFn();
        }
        return {
            success: true,
            message: clientSuccessMessage,
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        console.error(serverErrorMessage, error);
        return {
            success: false,
            message: getErrorMessage(error),
        };
    }
}
