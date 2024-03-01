import { Route } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescritpion";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductListItemFragment } from "@/gql/graphql";


type ProductListItemProps = {
	product: ProductListItemFragment,
    href: Route,
};


export const ProductListItem = ({product, href} :  ProductListItemProps) => {
    return (
    <li className="bg-white hover:scale-110 hover:border-gray-400 border-transparent border-2 rounded-md">
        <ActiveLink href={href} exact={true}>
        <article>
            {product.images[0] &&(<ProductCoverImage src={product.images[0].url} alt={product.name} />)}
            <ProductListItemDescription product={product}/>
        </article>
        </ActiveLink>
      </li>
    )
};