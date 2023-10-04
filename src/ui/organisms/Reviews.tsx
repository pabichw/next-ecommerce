"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { experimental_useOptimistic } from "react";
import { twMerge } from "tailwind-merge";
import { sendReviewAction } from "@/actions/reviews";
import { Maybe, Review } from "@/gql/graphql";
import { ReviewItem } from "@/ui//molecules/ReviewItem";
import Field from "@/ui/atoms/Field";
import { formDataToReview } from "@/utils/reviews";

/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */

export const Reviews = ({
	reviews,
	productId,
}: {
	reviews: Maybe<Review>[];
	productId: string;
}) => {
	const [optimisticReviews, addOptimisticReview] = experimental_useOptimistic(
		reviews || [],
		(state, review: Maybe<Review>) => [review, ...state],
	);
	const isVisible = true;

	return (
		<div>
			<div className="flex justify-between items-center">
				<h3 className="mb-5 text-l font-bold">Reviews</h3>
				<button
					className="flex items-center gap-1 text-sm hover:underline text-sky-400"
					// onClick={() => setFormVisible(!isVisible)}
				>
					{isVisible ? <MinusCircleIcon size={12} /> : <PlusCircleIcon size={12} />}
					{isVisible ? "Close form" : "Add review"}
				</button>
			</div>
			<div
				className={twMerge(
					"h-auto p-3 outline-gray-200 overflow-hidden transition-all",
					!isVisible && "h-[0px] p-0 outline-0",
				)}
			>
				<form data-testid="add-review-form" className="grid gap-1">
					<input name="productId" value={productId} type="hidden" />
					<Field name="heading" placeholder="Title" required />
					<Field name="content" placeholder="Content" required />
					<Field
						name="rating"
						placeholder="Rating"
						required
						type="number"
						defaultValue="5"
						min="1"
						max="5"
					/>
					<Field name="name" placeholder="Name" required cls="col-span-1" />
					<Field name="email" placeholder="Email" required cls="col-span-1" />
					<button
						className="text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md font-bold shadow transition-colors"
						formAction={async (data) => {
							addOptimisticReview({ id: "temp-id", ...formDataToReview(data) });
							await sendReviewAction(data);
						}}
					>
						Send 🐶
					</button>
				</form>
			</div>
			{!optimisticReviews || optimisticReviews.length === 0 ? (
				<div>No reviews for this product 🥵 Be first</div>
			) : (
				<ul data-testid="reviews-list">
					{optimisticReviews.map((review) => (
						<ReviewItem key={review?.id} review={review} />
					))}
				</ul>
			)}
		</div>
	);
};
