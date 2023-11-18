"use client"
import { useProductContext } from "@/app/contexts/ProductContext";

export default function ProductPage() {
    const { selectedProduct } = useProductContext();

    if (!selectedProduct) {
        return <div>No product selected</div>;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-96 mx-auto mt-24 p-6">
                <div className="m-3 p-6 text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <h6 className="text-2xl font-bold">
                            {selectedProduct.name}
                        </h6>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-400">
                            {selectedProduct.category}
                        </p>
                    </div>
                    <div>
                        <p className="pt-3">
                            {selectedProduct.description}
                        </p>
                    </div>
                    <div>
                        <h6 className="float-right mb-2 mt-2 font-semibold">
                            {selectedProduct.price} {selectedProduct.currency}
                        </h6>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
