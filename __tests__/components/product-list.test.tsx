import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../../src/app/components/ProductList";
import { ProductType } from "../../src/app/types/types";

describe("ProductList Component", () => {
    test("renders without crashing", () => {
        render(<ProductList currentItems={[]} />);
        expect(
            screen.getByText("No matching products found.")
        ).toBeInTheDocument();
    });
    test("renders products", () => {
        const mockProducts: ProductType[] = [
            {
                id: 1,
                name: "Product 1",
                price: 15,
                description: "product 1",
                currency: "EUR",
                category: "products",
            },
            {
                id: 2,
                name: "Product 2",
                price: 14,
                description: "product 2",
                currency: "EUR",
                category: "products",
            },
        ];

        render(<ProductList currentItems={mockProducts} />);

        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
    test("displays a message when there are no products", () => {
        render(<ProductList currentItems={[]} />);
        expect(
            screen.getByText("No matching products found.")
        ).toBeInTheDocument();
    });
});
