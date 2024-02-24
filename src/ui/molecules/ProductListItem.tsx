import { Route } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescritpion";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductItemType } from "@/ui/types";


export type ProductListItemProps = {
    product: ProductItemType,
    href: Route
};

export const ProductListItem = ({product, href} :  ProductListItemProps) => {
    return (
    <li className="bg-white hover:scale-110 hover:border-gray-400 border-transparent border-2 rounded-md">
        <ActiveLink href={href} exact={true}>
        <article>
            <ProductCoverImage coverImage={{src: product.coverImage.src, alt: product.coverImage.alt}}/>
            <ProductListItemDescription product={product}/>
        </article>
        </ActiveLink>
      </li>
    )
};