import React from "react";

interface SearchProps {
    placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} className="bg-transparent placeholder:text-[12px] outline-none" />
    );
};

export default Search;
