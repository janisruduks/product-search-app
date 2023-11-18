import React, { useState } from "react";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

interface ItemProps {
    handleExchange: Function;
}

const SearchBar: React.FC<ItemProps> = ({ handleExchange }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (value: string) => {
        setSearchValue(value);
        handleExchange(value);
    };

    return (
        <form>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative border border-gray-300 rounded-lg dark:border-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon path={mdiMagnify} size={1} color="grey" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-50 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search for products"
                    onChange={(e) => handleChange(e.target.value)}
                    value={searchValue}
                />
            </div>
        </form>
    );
};

export default SearchBar;
