import React from "react";

const EditAddress = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    // const addressData = getAddressById(id)
    // const [address] = await Promise.all([addressData]);
    return <div>EditAddress</div>;
};

export default EditAddress;
