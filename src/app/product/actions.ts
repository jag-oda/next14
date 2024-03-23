"use server";

import { addProductNewReview } from "@/api/product";
import { revalidateTag } from "next/cache";

export const addReviewAction = async (formData: FormData, productId: string) => {
	const data = {
		author: formData.get("name") as string,
		description: formData.get("content") as string,
		productId,
		email: formData.get("email") as string,
		rating: Number(formData.get("rating")),
		title: formData.get("headline") as string,
	};
	await addProductNewReview(data);
	revalidateTag("productReview");
};