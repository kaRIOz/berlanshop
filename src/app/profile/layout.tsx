import Header from "@/components/homepage/header/Header";
import ProfileSidebar from "@/components/profile/sidebar/profile-sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="w-11/12 mx-auto max-w-container flex flex-col-reverse gap-2 lg:grid grid-cols-1 lg:grid-cols-7 mt-10">
                <ProfileSidebar />
                <main className="h-fit lg:col-span-5 border border-gray-100 rounded-lg">{children}</main>
            </div>
        </>
    );
};

export default layout;
