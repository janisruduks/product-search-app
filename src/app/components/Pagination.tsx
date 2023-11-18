import React, { useState } from "react";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        onPageChange(newPage);
    };

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    const commonButtonClasses =
        "px-4 h-10 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white";

    return (
        <ul
            className="flex -space-x-px text-base h-10 mt-10 justify-center items-center dark:text-gray-400"
            data-testid="pagination"
        >
            <li>
                <button
                    onClick={() =>
                        handlePageChange(Math.max(currentPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`${commonButtonClasses} ms-0 rounded-s-lg`}
                >
                    Previous
                </button>
            </li>
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                    <button
                        onClick={() => handlePageChange(pageNumber)}
                        className={`${commonButtonClasses} ${
                            currentPage === pageNumber
                                ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
                                : ""
                        }`}
                    >
                        {pageNumber}
                    </button>
                </li>
            ))}
            <li>
                <button
                    onClick={() =>
                        handlePageChange(Math.min(currentPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`${commonButtonClasses} rounded-e-lg`}
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
