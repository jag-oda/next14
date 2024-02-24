import { ProductItemType } from "@/ui/types";

export const formatPrice = (price : number) => {
    return  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export const paginate = ( products: ProductItemType[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
};