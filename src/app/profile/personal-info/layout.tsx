import React from "react";

const layout = ({ children, modal }: { children: React.ReactNode; modal: never }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default layout;
