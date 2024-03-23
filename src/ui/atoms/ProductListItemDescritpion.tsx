import type { ProductListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils/utils";
import { RatingSection } from "./RatingSection";

type ProdutListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price, rating },
}: ProdutListItemDescriptionProps) => {
	return (
		<div className="mt-2 mb-4 flex justify-between p-2">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && (<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span> {categories[0].name}
				</p>)}
				<RatingSection  rating={Math.ceil(rating || 0)}/>
			</div>
			{price && (
			<p data-testid="product-price" className="text-lg font-bold">
				{formatPrice(price / 100)}
			</p>
		)}
		</div>
	);
};
