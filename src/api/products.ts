import { executeGraphql } from "./graphglApi";
import { 
    ProductsGetListDocument, 
    SuggestedProductsGetListDocument,
    ProductsGetListBySearchDocument,
	SortDirection,
	ProductSortBy,
} from "@/gql/graphql";


export const getProductsList = async (take: number, skip: number, order?: SortDirection, orderBy?: ProductSortBy) => {
    const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			order,
			orderBy,
		},
		next: {
			revalidate: 30,
		},
	});
    return graphqlResponse.products;
}
   
export const getSuggestedProductsList = async () => {
    const graphqlResponse = await executeGraphql({query: SuggestedProductsGetListDocument, variables: {}});
    return graphqlResponse.products.data.slice(-5);
};

export const getProductsListBySearch = async (search: string) => {
	const graphqlResponse = await executeGraphql({query: ProductsGetListBySearchDocument, variables: {
		search,
	}});
	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products?.data;
};

