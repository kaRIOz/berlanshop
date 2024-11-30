import React from "react";

interface SearchProps {
    placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent placeholder:text-[11px] outline-none text-[14px]"
        />
    );
};

export default Search;
