import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "../../src/app/components/Pagination";

describe("Pagination Component", () => {
    test("renders pagination component", () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                onPageChange={() => {}}
            />
        );
        const paginationElement = screen.getByTestId("pagination");
        expect(paginationElement).toBeInTheDocument();
    });

    test("renders correct number of page buttons", () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                onPageChange={() => {}}
            />
        );
        const pageButtons = screen.getAllByRole("button");
        expect(pageButtons.length).toBe(7);
    });

    test("calls onPageChange with correct page number when a page button is clicked", async () => {
        const mockOnPageChange = jest.fn();
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                onPageChange={mockOnPageChange}
            />
        );

        const nextButton = screen.getByText("Next");
        userEvent.click(nextButton);

        await waitFor(() => {
            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });
    });

    test("disables the Previous button on the first page", () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                onPageChange={() => {}}
            />
        );
        const previousButton = screen.getByText("Previous");
        expect(previousButton).toBeDisabled();
    });
});
