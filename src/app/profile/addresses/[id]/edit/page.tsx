import React from "react";

const EditAddress = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    return <div>EditAddress</div>;
};

export default EditAddress;
