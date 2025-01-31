import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface RangeFilterProps {
    value: number | string;
    onChange: (value: number | string) => void;
}

const RangeFilter = ({
    value: initialValue,
    onChange,
    ...props
}: RangeFilterProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
    // agar badan khastim filter variatn haye dige ezafe konim toye type filter varient union type ezafe mikonim
    // const { filterVariant } = column?.columnDef.meta ?? {};
    const [value, setValue] = useState(initialValue);

    // useEffect(() => {
    //     setValue(initialValue);
    // }, [initialValue]);

    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         onChange(value);
    //     }, 500);

    //     return () => clearTimeout(timeout);
    // }, [value]);

    return (
        <Input
            {...props}
            className="bg-transparent border border-gray-200 focus:border-gray-500 px-4 py-0 rounded-lg placeholder:text-regular outline-none text-medium font-medium focus-visible:ring-0  focus-visible:ring-offset-0"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
};

export default RangeFilter;
