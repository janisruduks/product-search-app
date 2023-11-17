import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../../src/app/components/Product";
import { ProductType } from "../../src/app/types/types";

describe("Product Component", () => {
    const mockProduct: ProductType = {
        id: 1,
        name: "Product",
        description: "test product",
        price: 100,
        currency: "EUR",
        category: "products",
    };

    test("renders product details", () => {
        render(<Product product={mockProduct} />);

        expect(screen.getByText("Product")).toBeInTheDocument();
        expect(screen.getByText("products")).toBeInTheDocument();
        expect(screen.getByText("100 EUR")).toBeInTheDocument();
    });

    test("constructs the correct link", () => {
        render(<Product product={mockProduct} />);
        const productLink = screen.getByRole("link");
        expect(productLink).toHaveAttribute(
            "href",
            `/products/${mockProduct.id}?name=Product&description=test+product&price=100&category=products`
        );
    });
});
