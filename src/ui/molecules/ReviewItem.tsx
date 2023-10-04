import { Maybe, Review } from "@/gql/graphql";
import { Rating } from "@/ui/molecules/Rating";

export const ReviewItem = ({ review }: { review: Maybe<Review> }) => {
	if (!review) {
		return null;
	}

	return (
		<li className="mx-auto">
			<div className="group flex flex-col gap-2 p-3 w-full h-full cursor-pointer border-bottom-1 hover:shadow-xl">
				<Rating id={review.id} value={review.rating} />
				<h3 className="text-md font-bold">{review.headline}</h3>
				<p className="text-sm">{review.content}</p>
			</div>
		</li>
	);
};
