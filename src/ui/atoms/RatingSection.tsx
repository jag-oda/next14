import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
};

export const RatingSection = ({ rating }: RatingProps) => {
	const addAndColorStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				fill={index < Math.round(rating) ? "#dec316" : "#c7c7c7"}
				size="18"
			/>
		));
	};

	return (
		<div className="flex text-center">
				<span data-testid="product-rating" className="mr-2 text-xs">
					{rating} / 5
				</span>
			{addAndColorStars()}
		</div>
	);
};