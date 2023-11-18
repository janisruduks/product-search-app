"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ProductType } from "./types/types";

import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Alert from "./components/Alert"

const ITEMS_PER_PAGE = 4;

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [allProducts, setAllProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [currentItems, setCurrentItems] = useState<ProductType[]>([]);
    const [alert, setAlert] = useState(false);

    const fetchItems = async () => {
        try {
            const response = await fetch("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd");
            const data = await response.json();
            setAllProducts(data.products);
        } catch (error) {
            setAlert(true);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchValue, allProducts]);

    const handleSetSearchValue = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const handlePaginationChange = useCallback((currentPage: number) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        setCurrentItems(paginatedItems);
    }, [filteredProducts]);

    useEffect(() => {
        handlePaginationChange(1);
    }, [filteredProducts, handlePaginationChange]);

    return (
        <main className="p-6">
            { alert && <Alert message="Failed to fetch data, please try again." />}
            <SearchBar handleExchange={handleSetSearchValue} />
            <ProductList currentItems={currentItems} />
            <Pagination 
                totalItems={filteredProducts.length} 
                itemsPerPage={ITEMS_PER_PAGE} 
                onPageChange={handlePaginationChange} 
            />
        </main>
    );
}
