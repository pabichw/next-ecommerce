/* eslint-disable @typescript-eslint/no-misused-promises */
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { twMerge } from "tailwind-merge";
import { sendReview } from "@/api/products";
import { Maybe, Review } from "@/gql/graphql";
import { ReviewItem } from "@/ui//molecules/ReviewItem";
import Field from "@/ui/atoms/Field";

async function sendReviewAction(formData: FormData): Promise<void> {
	"use server";

	await sendReview(String(formData.get("productId")), {
		headline: String(formData.get("heading")),
		content: String(formData.get("content")),
		rating: Number(formData.get("rating")),
		name: String(formData.get("name")),
		email: String(formData.get("email")),
	});

	revalidatePath(`/products/${String(formData.get("productId"))}`);
}

export const Reviews = ({
	reviews,
	productId,
}: {
	reviews: Maybe<Review>[];
	productId: string;
}) => {
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
				<form data-testid="add-review-form" className="grid gap-1" action={sendReviewAction}>
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
						type="submit"
					>
						Send 🐶
					</button>
				</form>
			</div>
			{!reviews || reviews.length === 0 ? (
				<div>No reviews for this product 🥵 Be first</div>
			) : (
				<ul data-testid="reviews-list">
					{reviews.map((review) => (
						<ReviewItem key={review?.id} review={review} />
					))}
				</ul>
			)}
		</div>
	);
};
