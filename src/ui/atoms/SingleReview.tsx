import { type ProductReviewFragment } from "@/gql/graphql";
import { RatingSection } from "./RatingSection";

type ReviewItemProps = {
	review: ProductReviewFragment;
};

export const SingleReview = ({ review }: ReviewItemProps) => {
    return (
        <li>
            <div className="flex justify-between">
			    <div className="flex flex-col" >
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{review.title}</h3>
				    <p className="font-semibold">{review.author}</p>
				    <span className="text-xs italic text-gray-600">{review.email}</span>
                    <RatingSection  rating={review.rating}/>
			    </div>
                
		    </div>
            <div className="mt-4 space-y-6 ml-6 mb-6">
                <p className="text-sm text-gray-500">{review.description}</p>
		    </div>
        </li>
    )
}