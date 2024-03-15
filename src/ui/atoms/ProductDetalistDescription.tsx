import type { ProductListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils/utils";

type ProductDetalistDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductDetalistDescription = ({
	product: { categories, price, description },
}: ProductDetalistDescriptionProps) => {

	return (
        <div className="w-full text-right mr-8">
            <div className="mr-6 font-ligh mb-4">
                {categories && <p className="text-sm text-gray-500 dark:text-gray-300">
					Categories: {categories[0].name}  
				</p> }
            </div>
            <div className="mr-6 mb-4 text-lg">
                <p>{description}</p>
            </div>
            <div className="mr-6 mb-4">
                <span>Price: </span>
                <span className="font-bold">{formatPrice(price)}</span>
            </div>
        </div>
	);
};
