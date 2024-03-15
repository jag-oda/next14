'use client';

import { ProductListItemFragment, ProductReviewFragment } from "@/gql/graphql";
import { Suspense, useOptimistic,} from "react";
import { ReviewsForProductList } from "./ReviewsForProductList";
import { SendReviewForm } from "../molecules/SendReviewForm";
import { addReviewAction } from "@/app/product/actions";


type ProductReviewsSectionProps = {
	product: ProductListItemFragment;
	reviews: ProductReviewFragment[];
};


export const ProductReviewsSection = ({ product, reviews }: ProductReviewsSectionProps) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews);

	const clearFormData = (formData: FormData) => {

	}; 

    return (
		<div className="max-w-2xl lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<div className="w-max">
				<h2 className="my-4 w-fit rounded-xl p-1.5 text-2xl font-bold text-black">
							Share your opinion 
				</h2>
				<div className="mt-10">
					<SendReviewForm  formAction={async (formData) => {
							await addReviewAction(formData, product.id);
							setOptimisticReviews((prev) => [
								...prev,
								{
									id: Math.random().toString(),
									title: String(formData.get("headline")),
									author: String(formData.get("name")),
									email: String(formData.get("email")),
									rating: Number(formData.get("rating")),
									description: String(formData.get("content")),
									createdAt: new Date().toISOString(),
								},
							]);
							 clearFormData(formData);
						}}
						/>
				</div>
			</div>
			<Suspense key="reviewsList">
				{reviews.length === 0 ? (
					<p>This product doesn't have any reviews yet</p>
				) : (
					<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
						<div>
							<ReviewsForProductList reviews={optimisticReviews} />
						</div>
					</div>
				)}
			</Suspense>
		</div>
	)
}
