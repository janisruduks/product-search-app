import React from "react";
import Link from "next/link";
import { ProductType } from "../types/types";
import { useProductContext } from "../contexts/ProductContext";

interface ProductProps {
    product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { setSelectedProduct } = useProductContext();

    const onProductClick = (product: ProductType) => {
        setSelectedProduct(product);
    };

    return (
        <div
            onClick={() => onProductClick(product)}
            className="m-3 p-6 h-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 relative"
        >
            <Link
                href={{
                    pathname: `/products/${product.id}`,
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
                <div className="absolute bottom-4 right-4">
                    <h6 className="text-gray-900 dark:text-white font-semibold">
                        {product.price} {product.currency}
                    </h6>
                </div>
            </Link>
        </div>
    );
};

export default Product;
