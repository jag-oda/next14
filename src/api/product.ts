import { ProductAddNewReviewDocument, ProductGetByIdDocument, ProductGetReviewsDocument, ProductListItemFragment } from "@/gql/graphql";
import { executeGraphql } from "./graphglApi";


export const getProductById =  async (id: ProductListItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql({query: ProductGetByIdDocument, variables: { id }})
    return graphqlResponse?.product;
};


export const getReviewsByProductId = async (id: string) => {
	const response = await executeGraphql({
		query: ProductGetReviewsDocument,
		variables: { productId: id },
	});

	if (!response) {
		throw new Error("Failed to fetch product");
	}
	return response.product?.reviews?.sort(function(a, b) {
        return new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime();
      })
};

export const addProductNewReview = async (
	data : { author: string, description: string, email: string, productId: string, rating: number, title: string}
) => {
	const response = await executeGraphql({
		query: ProductAddNewReviewDocument,
		variables: {
			author: data.author,
			description: data.description,
			email: data.email,
			productId: data.productId,
			rating: data.rating,
			title: data.title,
		},
		next: {
			tags: ["productReview"],
		},
	});

	if (!response) {
		throw new Error("Your review could not be added. Please try again");
	}

	return response;
};