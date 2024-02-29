import {ProductListItemFragment} from  "@/gql/graphql";
export const formatPrice = (price : number) => {
    return  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export const paginate = ( products: ProductListItemFragment[], pageNumber: number, pageSize: number) => {
    console.log('******** paginate', products)
    console.log('******** paginate', pageNumber)
    const startIndex = (pageNumber - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
};