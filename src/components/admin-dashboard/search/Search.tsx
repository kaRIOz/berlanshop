import React from "react";

interface SearchProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent border border-gray-200 focus:border-gray-500 px-4 py-2 rounded-lg placeholder:text-regular outline-none text-medium font-medium"
            value={value}
            onChange={onChange}
        />
    );
};

export default Search;
