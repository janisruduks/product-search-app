"use client"
import { createContext, useContext, useState } from "react";
import { ProductType } from "../types/types";

interface ProductContextType {
    selectedProduct: ProductType | null,
    setSelectedProduct: (product: ProductType | null) => void;
}

const ProductContext = createContext<ProductContextType>({
    selectedProduct: null,
    setSelectedProduct: () => {}
});

export const useProductContext = () => useContext(ProductContext);

interface ProductContextProps {
    children: React.ReactNode,
}

export const ProductProvider: React.FC<ProductContextProps> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    )
}