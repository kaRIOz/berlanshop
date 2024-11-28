import React from "react";

type ModalProps = {
    children?: React.ReactNode;
    className?: string;
};
const Modal: React.FC<ModalProps> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

export default Modal;
