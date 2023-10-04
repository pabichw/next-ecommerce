// import { revalidatePath } from "next/cache";
import { sendReview } from "@/api/products";
import { formDataToReview } from "@/utils/reviews";
// import { executeGraphql } from "@/utils/gql";

export async function sendReviewAction(formData: FormData): Promise<void> {
  //  "use server";

	await sendReview(String(formData.get("productId")), formDataToReview(formData));
  // const data = executeGraphql(DO)

	// revalidatePath(`/product/${String(formData.get("productId"))}`);
}