import { Maybe, Review } from "@/gql/graphql";
import { ReviewItem } from "@/ui//molecules/ReviewItem";

export const Reviews = ({ reviews }: { reviews: Maybe<Review>[] }) => {
	if (!reviews || reviews.length === 0) {
		return <div>No reviews for this product 🥵 Be first</div>;
	}

	return (
		<div>
			<h3 className="mb-5 text-l font-bold">Reviews</h3>
			<ul data-testid="reviews-list">
				{reviews.map((review) => (
					<ReviewItem key={review?.id} review={review} />
				))}
			</ul>
		</div>
	);
};
