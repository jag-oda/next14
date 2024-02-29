import type { ProductListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils/utils";

type ProdutListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProdutListItemDescriptionProps) => {
	return (
		<div className="mt-2 mb-4 flex justify-between p-2">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && (<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span> {categories[0].name}
				</p>)}
			</div>
			<p className="text-sm text-gray-900">
				<span className="sr-only">Cena:</span> {formatPrice(price)}
			</p>
		</div>
	);
};
