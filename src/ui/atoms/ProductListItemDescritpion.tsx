import { ProductItemType } from "@/ui/types";
import { formatPrice } from "@/utils/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType
};
export  const ProductListItemDescription = ({product: {price, name, category}}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 mb-4 flex justify-between p-2">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm text-gray-900">
				<span className="sr-only">Cena:</span> {formatPrice(price)}
			</p>
		</div>
	);
};
