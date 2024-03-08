import { Route } from "next";
import {ProductListItemFragment} from  "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";


export const ProductList = ({products} : { products: ProductListItemFragment[]}) => {
    return (
        <ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-8" data-testid="products-list">
        {products.map((product) => {
            return (
               <ProductListItem key={product.id} product={product} href={`/product/${product.id}` as Route} />
            )
        })}
        </ul>
    );
};