"use client";
import React from "react";
import Product from "./Product";
import { ProductType } from "../types/types";

interface Props {
    currentItems: ProductType[];
}

const ProductList: React.FC<Props> = ({ currentItems }) => {

    return (
        <div className="grid gap-3 lg:grid-cols-4 m-3 dark:text-white">
            {currentItems.length > 0 ? (
                currentItems.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <span>No matching products found.</span>
            )}
        </div>
    );
};

export default ProductList;
