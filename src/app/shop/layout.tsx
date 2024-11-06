import React from "react";

const LayoutShop = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <h1>LayoutShop</h1>

            {children}
        </div>
    );
};

export default LayoutShop;
