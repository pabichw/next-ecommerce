import { Review } from "@/gql/graphql"

export const formDataToReview = (formData: FormData): Omit<Review, 'id'> => {
	return ({
		headline: String(formData.get("heading")),
		content: String(formData.get("content")),
		rating: Number(formData.get("rating")),
		name: String(formData.get("name")),
		email: String(formData.get("email"))
	})
}