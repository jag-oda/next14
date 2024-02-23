import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescritpion";
import { ProductItemType } from "@/ui/types";

export type ProductListItemProps = {
    product: ProductItemType,
};

export const ProductListItem = ({product} : ProductListItemProps) => {
    return (
    <li className="bg-white hover:scale-110 hover:border-gray-400 border-transparent border-2 rounded-md">
        <article>
            <ProductCoverImage coverImage={{src: product.coverImage.src, alt: product.coverImage.alt}}/>
            <ProductListItemDescription product={product}/>
        </article>
      </li>
    )
};