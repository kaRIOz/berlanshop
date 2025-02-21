import { auth } from "@/auth";
import Header from "@/components/homepage/header/Header";
import ProfileSidebar from "@/components/profile/sidebar/profile-sidebar";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user.role) redirect("/");
    return (
        <>
            <Header />
            <div className="lg:w-5/6 xl:w-3/4   mx-auto max-w-container flex flex-col-reverse gap-4 lg:grid grid-cols-1 lg:grid-cols-7 p-2 md:p-0 md:mt-10">
                <ProfileSidebar />
                <main className="h-fit lg:col-span-5 border border-gray-100 rounded-lg  px-4 py-4 md:py-6">
                    {children}
                </main>
            </div>
        </>
    );
}
