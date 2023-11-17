export type ProductType = {
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
};

export type ItemType = {
    products: ProductType[];
};