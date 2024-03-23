import { type ProductReviewFragment } from "@/gql/graphql";
import { SingleReview } from "../atoms/SingleReview";

type ReviewForProductListProps = {
	reviews: ProductReviewFragment[];
};

export const ReviewsForProductList = ({ reviews }: ReviewForProductListProps) => (
	<ul className="my-6 divide-y divide-gray-200">
		{reviews.map((review) => (
			<SingleReview key={review.id} review={review} />
		))}
	</ul>
);