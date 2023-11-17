import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../src/app/components/SearchBar";

describe("SearchBar Component", () => {
    test("renders search input", () => {
        render(<SearchBar handleExchange={() => {}} />);
        const inputElement = screen.getByPlaceholderText("Search for products");
        expect(inputElement).toBeInTheDocument();
    });
    test("calls handleExchange with input value on change", async () => {
        const mockHandleExchange = jest.fn();
        render(<SearchBar handleExchange={mockHandleExchange} />);
        const inputElement = screen.getByPlaceholderText("Search for products");

        userEvent.type(inputElement, "test");

        await waitFor(() => {
            expect(mockHandleExchange).toHaveBeenCalledWith("test");
        });
    });
});
