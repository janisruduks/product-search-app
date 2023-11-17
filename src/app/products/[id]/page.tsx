export default function ProductPage({
    searchParams,
}: {
    searchParams: {
        name: string;
        description: string;
        price: string;
        category: string;
    };
}) {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-96 mx-auto mt-24 p-6">
                <div className="m-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {searchParams.name}
                        </h6>
                    </div>
                    <div>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {searchParams.category}
                        </p>
                    </div>
                    <div>
                        <p className="font-normal pt-3 dark:text-white text-gray-900">
                            {searchParams.description}
                        </p>
                    </div>
                    <div>
                        <h6 className="text-gray-900 dark:text-white float-right mb-2 mt-2 font-semibold">
                            {searchParams.price}€
                        </h6>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
