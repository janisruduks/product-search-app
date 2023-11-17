import React from "react";
import Link from "next/link";
import { ProductType } from "../types/types";

interface ItemProps {
    product: ProductType;
}

const Product: React.FC<ItemProps> = ({ product }) => {
    return (
        <div className="m-3 p-6 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 relative">
            <Link
                href={{
                    pathname: `/products/${product.id}`,
                    query: {
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        category: product.category,
                    },
                }}
            >
                <div className="flex-grow">
                    <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                    </h6>
                    <p className="text-gray-700 dark:text-gray-400">
                        {product.category}
                    </p>
                </div>
            </Link>
            <div className="absolute bottom-4 right-4">
                <h6 className="text-gray-900 dark:text-white font-semibold">
                    {product.price} {product.currency}
                </h6>
            </div>
        </div>
    );
};

export default Product;
