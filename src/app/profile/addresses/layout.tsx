import React, { FC, ReactNode } from "react";

interface LayoutProps {
    modal: ReactNode;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default Layout;
