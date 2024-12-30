import Header from "@/components/homepage/header/Header";
import ProfileSidebar from "@/components/profile/sidebar/profile-sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
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
};

export default layout;
